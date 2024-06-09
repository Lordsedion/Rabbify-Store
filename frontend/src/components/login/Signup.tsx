import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/images/rabbit2.jpg'
import './login.css'
import { FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa'
import { getCookie } from '../product/Product'
import { GlobalContext } from '../../App'

export function getWordsBeforeAtSymbol(email:string) {
    const match = email.match(/^([^@]+)@/);
    return match ? match[1] : null;
}

export function setCookie(name:any, value:any, days:any) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
export function getCookie1(name:any) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

const Signup = () => {
    const [state, setState] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")

    const context = useContext(GlobalContext)
    const setUsername = context!.setUsername
    const setIsLogin = context.setLogin

    const url = "http://localhost:8000/api/signup"
    const userData = {
        "username": getWordsBeforeAtSymbol(email),
        "email": email,
        "password": password,
    }

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify(userData)
      };
    

    async function postData (e:any) {
        e.preventDefault()
        if (password === password1) {
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
            setUsername(data["user"]["username"])
            setIsLogin(true)
            setCookie("username", data["user"]["username"], 7)
          })
          .catch(error => {
            console.error('Error:', error); // Handle any errors that occur
          });
        }
        else {
            throw new Error("Passwords do not match")
        }        

    }

  return (
    <div className="login">
        <div className="container">
            <div className="login-container">
                <img src={logo} alt="Image" />
                <div className="rest-login">
                   <h4 className="login-t">Create your account</h4>
                <a href="/login" className='at-0330'>Have an account already? <span><FaArrowRight/></span></a>

                <form onSubmit={(e:any)=> {postData(e)}}>
                    <div className="email-1">
                        <label htmlFor='email'>Email</label>
                        <input 
                        type="email" 
                        name="email" 
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
                    <div className="password-1">
                        <label htmlFor="password-1">Confirm Password</label>
                        <div className="trick">
                            <input 
                            className={password==password1 ? "": "er-log"}
                            type={state ? "password": "text"}
                             name="password-1" 
                             id="password" 
                             placeholder='Password'
                             value={password1}
                             onChange={(e:any)=> {
                                setPassword1(e.target.value)
                            }}      
                             />
                        </div>  
                    </div>
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

export default Signup
