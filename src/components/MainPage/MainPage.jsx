import React from 'react'
import './MainPage.css'
import {BsCloudLightningRain} from 'react-icons/bs'
import {BsCloudRain} from 'react-icons/bs'
// import AV1 from '../../assets/Image/hanoi.jpg'
// import AV2 from '../../assets/Image/caobang.jpg'
// import AV3 from '../../assets/Image/danang.jpg'
// import AV4 from '../../assets/Image/hagiang.jpg'
// import AV5 from '../../assets/Image/halong.jpeg'
// import AV6 from '../../assets/Image/nhatrang.jpg'
// import AV7 from '../../assets/Image/phuquoc.jpg'

// import { Pagination } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// const data = [
//   {
//     pic: AV1,
//     time: "9:00 AM",
//     date: "Friday, March 21, 2020",
//     loca: "Ha Noi",
//     city: "Viet Nam",
//     icon: "",
//     ex: "18 &deg;C",
//     inter: "20 &deg;C",
//     temp: "32",
//     hum: "69",
//     pres: "50"
//   }
// ]

function MainPage() {
  return (
    
      <div div className="mainpage">
        <div className="main__top">
          <div className="top__left">
            <h1> 9:AM </h1>
            <h3>Friday, 26 March, 2022</h3>
          </div>
          <div className="top__right">
            <h1>Pho Co</h1>
            <h3>Ha Noi</h3>
          </div>
        </div>
        <div className="main__bottom">
          <div className="bottom__left">
            <div className="left__rain">
            <div className="left__icon"><BsCloudRain/></div>
            <h2>Rainy</h2>
            </div>
            <div className="left__content">
              <div className="left__content-top">
                <h3>28 &deg;C</h3>
                <h3>External</h3>
              </div>
              <div className="left__content-bottom">
              <h3>28 &deg;C</h3>
              <h3>External</h3>
              </div>
            </div>
          </div>
          <div className="bottom__right">
            <div className="right__content">
              <div className="right__icon1"><BsCloudLightningRain/></div>
              <h3>Temperature(&deg;C)</h3>
              <h3>68</h3>
            </div>

            <div className="right__content">
            <div className="right__icon2"><BsCloudLightningRain/></div>
              <h3>Humidity(%)</h3>
              <h3>68</h3>
            </div>
            <div className="right__content">
            <div className="right__icon3"><BsCloudLightningRain/></div>

              <h3>Pressure(hPa)</h3>
              <h3>68</h3>
            </div>
          </div>
          </div>
          </div>
          )
        
        
        
      
    
  
  }

export default MainPage