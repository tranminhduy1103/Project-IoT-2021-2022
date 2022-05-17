import React from 'react'
import { Link } from 'react-router-dom'
import './Logout.css'

function Logout() {
  return (
    <>

        <div className="logout">
            <div className="logout__container">
              <div className="logout__header">
                CREATE AN ACCOUNT?
              </div>
                <div className="logout__form">
                  <div className="logout__header">
                  <input className='logout__username' type="text" placeholder='Username' required/>
                  <input className='logout__password' type="password" placeholder='Password' required/>
                  <input className='logout__address' type="text" placeholder='Adress' required/>
                  <input className='logout__email' type="email" placeholder='Email' required/>
                  </div>
                </div>
                <div className="sign__logout">
                <input className='btn btn-primary login__btn' type="button" value="SIGN UP"/>
                <div className="link__signin">
                  <Link to = '/' className='btn logout__signup'>
                    SIGN IN
                  </Link>
                </div>
                </div>
                
                <div className="logout__footer">
                    <div className="footer__top">
                      -Or Sign In With-
                    </div>
                    <div className="footer__down">
                      <div className="down__social">
                        <div className="btn down__facebook">
                          FACEBOOK
                        </div>
                        <div className="btn down__twitter">
                          TWITTER
                        </div>
                      </div>
                    </div>
                </div>
              
            </div>
          </div>
              </>
            
          
  )
}

export default Logout