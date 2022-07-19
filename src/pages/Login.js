import React, { useReducer, useState } from 'react';
import { NavLink, Link, useNavigate, Navigate } from "react-router-dom";
import './Login.css';
import logod from '../Img/logod.png';
import axios from 'axios';


const Login = ({ setLogin }) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      window.location = "/beranda";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  // const [user, setUser] = useState({});
  // const history = useNavigate();

  // const submitLogin = (e) => {
  //   e.preventDefault();
  //   const { email, password } = user;
  //   setLogin(false);
  //   history("/beranda");
  // }
  // const handlerChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.name })
  // }
  return (
   <>
   
  
    <div className="sign-in">
      <div className="sign-right">
        <form className="login-form" onSubmit={handleSubmit}>
          {/* email */}
          <h1 className="form-title">Masuk</h1>
            
              {/* <label htmlFor="email" >
                <i className="zmdi zmdi-account material-icons-name"></i>
              </label> */}
              <input
               type="text"   
               onChange={handleChange} 
               value={data.email}
               placeholder="Email"
               name='email'
               className='password-field'
               required
              />
              
            
            {/* password */}
           
              {/* <label htmlFor="password" onChange={handleChange} value={data.password}>
                <i className="zmdi zmdi-account material-icons-name"></i>
              </label> */}
              <input 
              type="password" 
              placeholder="Password" 
              onChange={handleChange} 
              value={data.password}
              name="password"
              className='password-field'
              required
              />
            
            <div href="/">
                  <input type="submit" name="signin" id="signin" className="form-submit"
                    value="Login" />
            </div>

            {/* <button className="button-login" type='submit'>Login</button> */}
            {/* <div href="/">
              <input type="submit" name="signup" id="signup" className="form-submit"
                value="Login" />
            </div> */}
            <Link to="/register" className="signup-image-link"> Buat akun ?</Link>
          </form>
          
          </div>
          <div className="sign-left">
            <img src={logod} alt="" />
          </div>
      </div>
   
    </>
   
  )
}

export default Login;

