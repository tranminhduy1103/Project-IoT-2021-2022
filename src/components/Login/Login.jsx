import React from 'react'
import './Login.css'
import BG from '../../assets/Image/bg.jpg'
import { Link, useNavigate } from 'react-router-dom'
import {useState, useEffect} from "react"
import axios from 'axios'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { setUserSession } from '../Utils/Common'
// import { set } from 'immer/dist/internal'



const Login  = () => {

  const  [error, setError] = useState(null)
  const  [loading, setLoading] = useState(false)
  const  [username, setUsername] = useState("");
  const  [password, setPassword] = useState("");
  const navigate = useNavigate();
  // useEffect(() => {
  //    if (localStorage.getItem('user-info')) {
  //      navigate("/main")
  //   }
  // })

  // async function handleLogin () {
  //   console.warn(email,password)
  //   let item={email, password};
  //   let result = await fetch("https://health-record-api.azurewebsites.net/api/Auth/Login",{
  //     method: 'POST',
  //     headers:{
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"

  //     },
  //     body:JSON.stringify(item)

  //   });
  //   result = await result.json();
  //   localStorage.setItem("user-info",JSON.stringify(result))
  //   navigate("/main")
      
  // }

  const Login = (e) => {
    // setError(null);
    // setLoading(true);
    // axios.post("http://localhost:4000/", {
    //   username: username,
    //   password: password,
    // }).then(response => {
    //   setLoading(false)
    //   setUserSession(response.data.token, response.data.user)
    //   navigate('/main')
    //   console.log('response ...', response);
    // }).catch(error => {
    //   setLoading(false);
    //   if(error.response.status === 401 || error.response.status === 400){
    //     setError(error.response.data.message);
    //   }else {
    //     setError("something wrong")
    //   }
    //   console.error('response ...', error);

    // });

    // return username, password

    navigate('/main')
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
                      <input className='form__username' type="text" placeholder='email' required value={username}
                      onChange={e => setUsername(e.target.value)}/>
                      <input className='form__password' type="password" placeholder='Password' required value={password}
                      onChange={e => setPassword(e.target.value)}/>
                    </form>
                    <br/>
                    {error && <p className='error'>{error}</p>}
                  </div>
                </div>
                <div className="sign">
                <button 
                onClick={Login} 
                className='btn btn-primary login__btn'
                value={loading ? "Loading..." : "Login"}
                disabled = {loading}
                 > Login </button>
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

export default Login;