import React from 'react'
import './Login.css'
import BG from '../../assets/Image/bg.jpg'
import { Link } from 'react-router-dom'
import {useState} from "react"

function Login() {

  const  [username, setUserName] = useState("");
  const  [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password
    }
  }


  return (
        <div>

          <div className="login">
            <div className="login__container">
              <div className="login__header">
                HAVE AN ACCOUNT?
              </div>
                <div className="login__form">
                  <div className="login__header">
                    <form>
                      <input className='form__username' type="text" placeholder='Username' required
                      onChange={(e) => setUserName(e.target.value)}/>
                      <input className='form__password' type="password" placeholder='Password' required
                      onChange={(e) => setPassword(e.target.value)}/>
                    </form>
                  </div>
                </div>
                <div className="sign">
                <input className='btn btn-primary login__btn' type="button" value="SIGN IN"
                onSubmit={handleLogin}/>
                <div className="login__link">
                  <Link to = '/sign-up' className='btn btn__signup'>
                    SIGN UP
                  </Link>
                </div>
               
                </div>
                
                <div className="login__footer">
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
          

	</div>
  )
}

export default Login