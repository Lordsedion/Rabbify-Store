import React, { useContext, useState } from 'react'
import logo from '../../assets/images/rabbit2.jpg'
import './login.css'
import { FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa'
import { getCookie } from '../product/Product';
import { GlobalContext } from '../../App';
import { setCookie } from './Signup';


const Login = () => {
    const [state, setState] = useState(true)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const context = useContext(GlobalContext)
    const setUsername = context!.setUsername
    const setIsLogin = context.setLogin

    const url = "http://localhost:8000/api/login"
    const userData = {
        "email": email,
        "password": password,
    }

    
    

    async function postData (e:any) {
        
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(userData)
        };
        e.preventDefault()
        fetch(url, options)
        .then(response=> {
            if (!response.ok) {
                throw new Error("Response is not okay " + response.statusText)
            }
            else {
                return response.json()
            }
        })
        .then(data => {
            console.log(data)
            setUsername(data["username"])
            setIsLogin(true)
            setCookie("username", data["username"], 7)
            
            if (data["status"] === 200) {
               window.location.assign("http://localhost:8000") 
            }
            
          })
          .catch(error => {
            console.error('Error:', error); // Handle any errors that occur
          });       

    }

  return (
    <div className="login">
        <div className="container">
            <div className="login-container">
                <img src={logo} alt="Image" />
                <div className="rest-login">
                   <h4 className="login-t">Sign in to your account</h4>
                <a href="/signup" className='at-0330'>Don't have an account? <span><FaArrowRight/></span></a>

                <form onSubmit={(e:any)=> {postData(e)}}>
                    <div className="email-1">
                        <label htmlFor='email'>Username</label>
                        <input 
                        type="text"
                        name="textt" 
                        id="email" 
                        placeholder='you@example.com'
                        value={email}
                        onChange={(e:any)=> {
                            setEmail(e.target.value)
                        }}      
                        />
                    </div>
                    <div className="password-1">
                        <label htmlFor="password">Password</label>
                        <div className="trick">
                            <input 
                            type={state ? "password": "text"}
                             name="password"
                             id="password"
                             placeholder='Password'
                             value={password}
                             onChange={(e:any)=> {
                                setPassword(e.target.value)
                             }}
                                />
                            <span onClick={()=> {
                                setState(!state)
                            }}>{state ? <FaEye/> : <FaEyeSlash/>}</span>
                        </div>  
                    </div>
                    <a href="#" className='forg-pass'>Forgot password?</a>
                    <button className='sign-in'>Sign in</button>
                </form>
                <p className="cent01">OR</p>
                <button className="cent-11">Continue as seller</button>
             
                </div>
                </div>
        </div>
    </div>
  )
}

export default Login
