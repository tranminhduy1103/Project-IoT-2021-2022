import React from 'react'
import './MainPage.css'
import {BsCloudLightningRain} from 'react-icons/bs'

function MainPage() {
  return (
    <>
      <div className="mainpage">
        <div className="main__top">
          <div className="top__left">
            <h1> 9:AM </h1>
            <h3>Monday, May 9, 2022</h3>
          </div>
          <div className="top__right">
            <h1>HaNoi</h1>
            <h3>Viet Nam</h3>
          </div>
        </div>
        <div className="main__bottom">
          <div className="bottom__left">
            <div className="left__rain">
            <i class="left_icon fa-solid fa-cloud-rain"></i>
            <h1>as</h1>
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
              <div className="right__icon"><BsCloudLightningRain/></div>
              <h3>Humidity(%)</h3>
              <h3>68</h3>
            </div>

            <div className="right__content">
            <div className="right__icon"><BsCloudLightningRain/></div>
              <h3>Humidity(%)</h3>
              <h3>68</h3>
            </div>
            <div className="right__content">
            <div className="right__icon"><BsCloudLightningRain/></div>

              <h3>Humidity(%)</h3>
              <h3>68</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage