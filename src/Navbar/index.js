// Navbar.js
import React, { useState } from 'react';
import './index.css';
import JokeModal from '../Jokemodal';
import { useNavigate } from 'react-router-dom';
// Import the modal component

const Navbar = () => {
    const [randomJoke, setRandomJoke] = useState('');
    const [showModal, setShowModal] = useState(false);
    const naviagte = useNavigate('')

    const fetchRandomJoke = async () => {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10');
            const data = await response.json();
            const randomNumber = Math.floor(Math.random() * 10)
            console.log(data.jokes[randomNumber].joke)
            setRandomJoke(data.jokes[randomNumber].joke); // Assuming the response JSON has a 'joke' field
            setShowModal(true); // Show the modal after fetching the joke
        } catch (error) {
            console.error('Error fetching random joke:', error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const logoutButton = () => {
        naviagte('/')
    }

    return(
        <div>
            <nav className='main-background-navbar'>
                <div>
                    <h4 className='main-heading-navbar'>Hello Vinay</h4>
                </div>
                <div className='box-container-navbar'>
                    <button className='button-navbar' onClick={fetchRandomJoke}>Random joke</button>
                    <button className='button-navbar' onClick={logoutButton}>Logout</button>
                </div>
            </nav>
            {showModal && <JokeModal joke={randomJoke} onClose={handleCloseModal} />}
        </div>
    );
};

export default Navbar;
