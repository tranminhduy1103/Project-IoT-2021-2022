import React from 'react'
import {FaTemperatureHigh} from 'react-icons/fa';
import {WiHumidity} from 'react-icons/wi'
import './Data.css'

function Data() {
  return (
    <div className="container">
        <div className="content">
                <div className="content__header--time">
                    Time
                </div>
                <div className="content__header--sunday">
                    <span>Sunday</span>
                  
                </div>
                <div className="content__header--monday">
                    <span>Monday</span>
                </div>
                <div className="content__header--tuesday">
                    <span>Tuesday</span>
                  
                </div>
                <div className="content__header--wednesday">
                    <span>Wednesday</span>
                  
                </div>
                <div className="content__header--thursday">
                   <span>Thursday</span>
                  
                </div>
                <div className="content__header--friday">
                    <span>Friday</span>
                  
                </div>
                <div className="content__header--saturday">
                    <span>Saturday</span>
                  
                </div>
            <div className="temp__morning">
                <img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ybmluZyUyMGxhbmRzY2FwZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60" alt="" className="mor__picture" />
                <span>In the morning</span>
            </div>

            <div className="temp__afternoon">
                <img src="https://images.unsplash.com/photo-1429734956993-8a9b0555e122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWZ0ZXJub29uJTIwbGFuZHNjYXBlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="" className="aft__picture" />
                <span>In the afternoon</span>
            </div>

            <div className="temp__night">
                <img src="https://images.unsplash.com/photo-1497996377197-e4b9024658a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbmluZyUyMGxhbmRzY2FwZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60" alt="" className="eve__picture" />
                <span>In the evening</span>
            </div>
            <div className="sun__mor">
                <div className="sun__mor--up">
                <span className='sun__mor__up--content'> <FaTemperatureHigh/> Temp:</span>
                <span className="sun__up--temp"> 31.4(&deg;C)</span>
                </div>
                
                <div className="sun__mor--down">
                  <span className="sun__down--content"><WiHumidity/> Humidity:</span>
                  <span className="sun__down--humid"> 72.4</span>
                </div>
            </div>
            <div className="sun__aft">
            <div className="sun__aft--up">
                <span className='sun__aft__up--content'><FaTemperatureHigh/> Temp:</span>
                <span className="sun__aft__up--temp"> 32.1(&deg;C)</span>
                </div>
                
                <div className="sun__aft--down">
                  <span className="sun__aft__down--content"><WiHumidity/> Humidity:</span>
                  <span className="sun__aft__down--humid"> 73</span>
                </div>
            </div>
            <div className="sun__eve">
            <div className="sun__eve--up">
                <span className='sun__eve__up--content'><FaTemperatureHigh/> Temp:</span>
                <span className="sun__eve__up--temp"> 28.2(&deg;C)</span>
                </div>
                
                <div className="sun__mor--down">
                  <span className="sun__eve__down--content"><WiHumidity/> Humidity:</span>
                  <span className="sun__eve__down--humid"> 70</span>
                </div>
                </div>

                <div className="mon__mor">
                <div className="mon__mor--up">
                <span className='mon__up--content'> <FaTemperatureHigh/> Temp:</span>
                <span className="mon__up--temp"> 32.3(&deg;C)</span>
                </div>
                
                <div className="mon__mor--down">
                  <span className="mon__down--content"><WiHumidity/> Humidity:</span>
                  <span className="mon__down--humid"> 72.2</span>
                </div>
            </div>
            <div className="mon__aft">
            <div className="mon__aft--up">
                <span className='mon__aft__up--content'><FaTemperatureHigh/> Temp:</span>
                <span className="mon__aft__up--temp"> 33.1(&deg;C)</span>
                </div>
                
                <div className="mon__aft--down">
                  <span className="mon__aft__down--content"><WiHumidity/> Humidity:</span>
                  <span className="mon__aft__down--humid"> 69.5</span>
                </div>
            </div>
            <div className="mon__eve">
            <div className="mon__eve--up">
                <span className='mon__eve__up--content'><FaTemperatureHigh/> Temp:</span>
                <span className="mon__eve__up--temp"> 29.3(&deg;C)</span>
                </div>
                
                <div className="mon__mor--down">
                  <span className="mon__eve__down--content"><WiHumidity/> Humidity:</span>
                  <span className="mon__eve__down--humid"> 72.3</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Data