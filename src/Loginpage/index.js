import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

const Login = () => {
    const [oldUser, newuser] = useState('')
    const [oldPassword, newPassword] = useState('');
    const navigate = useNavigate('')

    const handleDetails = () => {
        if (oldUser === 'vinay' && oldPassword === 'Vinay1919') {
            navigate('/table')
        }

        else {
            window.alert('Please Enter Valid Details')
        }
    }

    return(
        <div className='main-background'>
            <div>
                <div className='heading-container'>
                    <h3 className='heading'>Login</h3>
                </div>
                <div className='input-box-container'>
                    <div className='input-box-each-container'>
                        <label>User Name</label> <br />
                        <input className='input-container' type='text' placeholder='Enter Username' onChange={(event) => newuser(event.target.value)} value={oldUser}/>
                    </div>
                    <div className='input-box-each-container'>
                        <label>Password</label> <br />
                        <input className='input-container' type='Password' placeholder='Enter Password' onChange={(event) => newPassword(event.target.value)} value={oldPassword}/>
                    </div>
                </div>
                <div className='button-container'>
                <button className='submit-button' onClick={handleDetails}>Login</button>
                </div>
            </div>
        </div>
    )
}



export default Login;