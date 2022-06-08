import React from 'react'
import './Dat.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {FaTemperatureHigh} from 'react-icons/fa';
import {WiHumidity} from 'react-icons/wi'
import { Link, useNavigate } from 'react-router-dom'


function Dat() {
    
    const [dataTemp, setDataTemp] = useState([])


    useEffect(() => {
        async function check() {
            let res = await axios.get('https://health-record-api.azurewebsites.net/api/Record/GetAll')
        let data = res && res.data ? res.data : [];
        setDataTemp(data)
        }
        check()
    }, []);
    
  const navigate = useNavigate();
    
    const handleReload = (e) => {
        window.location.reload()
    }


  return (
      
    <div className='dat__container'>
        <table className='dat__table'>
        <thead className='table__header'>
            
            <tr className='header'>
                <th>Id</th>
                <th>Date</th>
                <th><FaTemperatureHigh className='temp'/>   Temperature</th>
                <th><WiHumidity className='humid'/> Humidity</th>
            </tr>
                
        </thead>
    <tbody>
        {dataTemp && dataTemp.length > 0 && dataTemp.map(item => {
            return (
                <tr key = {item.id}>
                    <td>{item.id}</td>
                    <td>{item.dateIssued}</td>
                    <td>{item.temperature}</td>
                    <td>{item.humidity}</td>
                </tr>
            )
        })}
        
    </tbody>
   
    </table>
        <div onClick={handleReload} className="btn button">
        <Link to = '/dat'/> Reload
        </div>
    </div>
  )
}

export default Dat