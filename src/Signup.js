import React, {useState ,useEffect} from 'react'
import { Link} from "react-router-dom";
import './Signup.css'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { signupApi } from './services/Api';
import { setStorage } from './services/Storage';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import { useNavigate, useLocation } from 'react-router-dom';



const Signup = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [error, setError] = useState(
        {
            name: { required: false },
            email: { required: false },
            password: { required: false },
            customerror: null
        }
    );
    const [input, setInput] = useState(
        {
            name: "",
            email: "",
            password: ""
        }
    )

    const toggleVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        let hasError = false;
        if (input.name === "") {
            error.name.required = true;
            hasError = true;
        }
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
                const response = await signupApi(input);
                setStorage(response.data.idToken);
                setError({ ...error, customerror: false });
                setAlertVisible(true);



                setTimeout(() => {
                    setAlertVisible(false);
                    navigate('/login');

                }, 2000);



            } catch (err) {


                if (err.response.data.error.message ===
                    "WEAK_PASSWORD : Password should be at least 6 characters") {
                    setError({ ...error, customerror: "Password should be at least 8 characters" });
                }



            }

        }
        setError({ ...error });
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
                        <FaUser />
                        <input type="text"
                            name="name"
                            id="userName"
                            onChange={handleInput}
                            placeholder="Username" />

                    </div>
                    {error.name.required ? (<div className='text-danger fs-5 textrequired'>Username is required</div>) : null}
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
                    <button className="btn mt-3 fs-4" type='submit' onClick={handleSubmit}>Signup</button>
                </form>
                <div className="text-center fs-6">
                    (or)
                </div>
                <div className="text-center fs-5">
                    already have an account? <Link to="/login" className='fw-bold'>Login</Link>
                </div>
            </div>
            <Slide direction="left" in={alertVisible} mountOnEnter unmountOnExit>
                <Alert

                    severity="success" variant="filled"
                    sx={{
                        position: 'fixed', top: '12%', right: '2%', transform: 'translateY(-50%)',
                        width: '400px',
                        height: '50px',
                        display: 'flex',
                        fontSize: '16px',
                        alignItems: 'center',
                        zIndex: 2
                    }}
                >
                    Account created successfully
                </Alert>
            </Slide>
        </div>
    )

}

export default Signup
