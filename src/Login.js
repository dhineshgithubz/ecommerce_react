import React, { useState, useEffect } from 'react'
import './Login.css'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { loginApi } from './services/Api';
import { setStorage } from './services/Storage';


const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [error, setError] = useState(
        {
            email: { required: false },
            password: { required: false },
            customerror: null
        }
    );
    const [input, setInput] = useState(
        {
            email: "",
            password: ""
        }
    )

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const toggleVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        let hasError = false;

        if (input.email === "") {
            error.email.required = true;
            hasError = true;
        }
        if (input.password === "") {
            error.password.required = true;
            hasError = true;
        }
        if (!hasError) {
            try {
                await loginApi(input).then((response) => {
                    setStorage(response.data.idToken);
                    navigate('/');
                    setError({ ...error, customerror: false });
                })
            } catch (err) {
                setError({ ...error, customerror: "Username and password is incorrect" });
            }

        }
    }


    return (
        <div>
            <div className="wrapper1">
                <div className="logo">
                </div>
                <div className="text-center mt-4 name">
                    Fashionz
                </div>
                <form className="p-3 mt-3" onSubmit={handleSubmit}>
                    <div className="form-field d-flex align-items-center">
                        <MdEmail />
                        <input type="text"
                            name="email"
                            id="email"
                            onChange={handleInput}
                            placeholder="Email" />
                    </div>
                    {error.email.required ? (<div className='text-danger fs-5 textrequired'>Email is required</div>) : null}
                    <div className="form-field d-flex align-items-center">
                        {passwordVisible ? (
                            <FaRegEye onClick={toggleVisibility} />
                        ) : (
                            <FaEyeSlash onClick={toggleVisibility} />
                        )}
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            name="password"
                            id="pwd"
                            onChange={handleInput}
                            placeholder="Password"

                        />
                    </div>
                    {error.password.required ? (<div className='text-danger fs-5 textrequired'>Password is required</div>) : null}
                    {error.customerror ? (<div className='text-danger fs-5 textrequired'>{error.customerror}</div>) : null}
                    <button className="btn mt-3 fs-4" type='submit' onClick={handleSubmit}>Login</button>
                </form>
                <div className="text-center fs-6">
                    (or)
                </div>
                <div className="text-center fw-bold">
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
