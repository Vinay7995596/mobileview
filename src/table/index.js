import { useEffect, useState } from 'react';
import './index.css';
import Navbar from '../Navbar';

const Table = () => {
  const [pastData, presentData] = useState([])
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async () => {
    try{
      const response = await fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
      const data = await response.json()
      presentData(data.jokes)
    }
    catch(error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <table>
            <thead>
            <tr>
            <th className='divingLine'>category</th>
            <th className='divingLine'>joke</th>
            <th className='divingLine'>type</th>
            </tr>
            </thead>
            <tbody>
            {pastData.map((everyItem, index) =>(
          <tr>
            <td className='divingLine' key={index}>{everyItem.category}</td>
          <td className='divingLine'>{everyItem.joke}</td>
          <td className='divingLine'>{everyItem.type}</td>
          </tr>
        ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
