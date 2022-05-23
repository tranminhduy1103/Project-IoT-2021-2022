import React from 'react'
import './Login.css'
import BG from '../../assets/Image/bg.jpg'
import { Link, useNavigate } from 'react-router-dom'
import {useState, useEffect} from "react"


function Login() {

  const  [email, setEmail] = useState("");
  const  [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
     if (localStorage.getItem('user-info')) {
       navigate.push("/main")
    }
  })

  async function handleLogin () {
    console.warn(email,password)
    const item={email, password}
    const result = await fetch("https://health-record-api.azurewebsites.net/api/Auth/Login",{
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"

      },
      body: JSON.stringify(item)

    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    navigate.push("/main")
      
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
                      <input className='form__username' type="text" placeholder='Email' required
                      onChange={(e) => setEmail(e.target.value)}/>
                      <input className='form__password' type="password" placeholder='Password' required
                      onChange={(e) => setPassword(e.target.value)}/>
                    </form>
                  </div>
                </div>
                <div className="sign">
                <button className='btn btn-primary login__btn'
                 onClick={handleLogin}> Login </button>
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