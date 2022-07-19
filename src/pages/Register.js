import React, { useState } from "react";
import "./Register.css";
import { useNavigate, Link } from "react-router-dom";
import logod from '../Img/logod.png';
import axios from "axios";


const Register = () => {
  const [value, setValues] = useState({
    username: "",
    email: "",
    institusi: "",
    jenjang: "",
    password: "",
  });
  // const history = useNavigate();
 
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setValues({ ...value, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    try {
      const url = "https://bacain.herokuapp.com/api/users";
      const { value: res } = await axios.post(url, value);
      navigate("/");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.value.message);
        console.log(error.response);
      }
    }
  };
  // const inputs = [
  //   {
  //     id: 1,
  //     name: "username",
  //     type: "text",
  //     placeholder: "Username",
  //     // errorMessage:
  //     //   "Username should be 3-16 characters and shouldn't include any special character!",
  //     label: "Username",
  //     pattern: "^[A-Za-z0-9]{3,16}$",
  //     required: true,
  //     onChange: {handleChange},
      
  //   },
  //   {
  //     id: 2,
  //     name: "email",
  //     type: "email",
  //     placeholder: "Email",
  //     // errorMessage: "It should be a valid email address!",
  //     label: "Email",
  //     required: true,
  //   },
  //   {
  //     id: 3,
  //     name: "instisusi",
  //     type: "text",
  //     placeholder: "Institusi",
  //     label: "Institusi",
  //     pattern: "^[A-Za-z0-9]{3,16}$",
  //     required: true,
  //   },
  //   {
  //     id: 4,
  //     name: "jenjang",
  //     type: "text",
  //     placeholder: "Jenjang",
  //     label: "Jenjang",
  //     pattern: "^[A-Za-z0-9]{3,16}$",
  //     required: true,
  //   },
  //   {
  //     id: 5,
  //     name: "password",
  //     type: "password",
  //     placeholder: "Password",
  //     // errorMessage:
  //     //   "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
  //     label: "Password",
  //     pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
  //     required: true,
  //   },
  //   // {
  //   //   id: 6,
  //   //   name: "confirmPassword",
  //   //   type: "password",
  //   //   placeholder: "Confirm Password",
  //   //   errorMessage: "Passwords don't match!",
  //   //   label: "Confirm Password",
  //   //   pattern: values.password,
  //   //   required: true,
  //   // },
  // ];



  // const onChange = (e) => {
  //   setValues({ ...value, [e.target.name]: e.target.value });
  // };

  return (
    <>
      <div className="regis">
        <div className="regis-right">
          <form className="regis-form"onSubmit={handleSubmit}>
            <h1 className="form-title">Register</h1>
            {/* {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
              
            ))} */}
            <input 
            onChange={handleChange}
            value={value.username}
            required
            placeholder="username"
            className="username"
            name="username"
            
            />
            <br></br>
             <input 
            onChange={handleChange}
            value={value.email}
            required
            placeholder="email"
            type="text"
            name="email"
            className="email-regis"
            />

            <br></br>
             <input 
            onChange={handleChange}
            value={value.password}
            required
            placeholder="password"
            type="text"
            name="password"
            className="password-regis"
            
            />
            <br></br>
             <input 
            onChange={handleChange}
            value={value.institusi}
            required
            placeholder="institusi"
            type="text"
            name="institusi"
            className="institusi-regis"
            
            />
            <br></br>
             <input 
            onChange={handleChange}
            value={value.jenjang}
            required
            placeholder="jenjang"
            type="text"
            name="jenjang"
            className="jenjang-regis"
            
            />

            <div href="/">
                  <input type="submit" name="signin" id="signin" className="form-submit"
                    value="Submit"/>
            </div>

            {/* <Link to="/">
              <button>Submit</button>
            </Link> */}
          </form>

          </div>
          <div className="regis-left">
              <img src={logod} alt="" />
          </div>
    </div>
  </>
  );
};

export default Register;
