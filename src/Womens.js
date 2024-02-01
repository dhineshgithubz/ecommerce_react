import React, { useContext, useEffect, useState } from 'react'
import './Womens.css'
import women1 from '../src/img/women1.jpg'
import women2 from '../src/img/women2.jpg'
import women3 from '../src/img/women3.jpg'
import women4 from '../src/img/women4.jpg'
import banner2 from '../src/img/banner2.jpg'
import {useNavigate,useLocation } from 'react-router-dom'
import DataContext from './context/DataContext'
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import Loading from "./Loading";
import { useTheme, useMediaQuery } from '@mui/material';
import { authenticate } from './services/Auth';

const Womens = () => {
    const { setIsActiveHome, setIsActiveMens, setIsLoggedIn,
        setIsActiveWomens, setIsActiveKids, isLoggedIn } = useContext(DataContext);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertitemVisible, setAlertitemVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const { pathname } = useLocation();

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const alertWidth = isSmallScreen ? '90%' : '400px';
    const alertHeight = isSmallScreen ? '25px' : '50px';
    const alertFont = isSmallScreen ? '11px' : '16px';
    const alertTop = isSmallScreen ? '8%' : '12%';

    const navigate = useNavigate();
    const handleImageLoad = () => {
        if (document.querySelectorAll('.img-fluid:not([loaded])').length === 0) {
            setLoading(false);
        }
    };
    const handleRedirect6 = () => {
        if (isLoggedIn) {
            navigate('/womensshirt');

        }
        else {
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 3500);
        }
    };
    const handleRedirect7 = () => {
        if (isLoggedIn) {
            navigate('/womenstshirt');

        }
        else {
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 3500);
        }
    };
    const handleRedirect8 = () => {
        if (isLoggedIn) {
            navigate('/saree');

        }
        else {
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 3500);
        }
    };

    const handleRedirect15 = () => {
        setAlertitemVisible(true);
        setTimeout(() => {
            setAlertitemVisible(false);
        }, 3500);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(
        () => {
            setIsActiveHome(false);
            setIsActiveMens(false);
            setIsActiveWomens(true);
            setIsActiveKids(false);
        }, [setIsActiveHome,setIsActiveWomens,setIsActiveMens,setIsActiveKids]
    )
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        },);

        return () => clearTimeout(loadingTimeout);
    }, []);
    useEffect(() => {
        const checkAuthentication = () => {
            setIsLoggedIn(authenticate());
        };

        checkAuthentication();

    }, [setIsLoggedIn])

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 womensbanner">
                        <img src={banner2} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row mb-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 display-5 fw-lighter text-center">
                        Womens Categories
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row containermens">
                    <div className="col-md-2"></div>
                    <div className="col-md-2 col-3 stripe11" onClick={handleRedirect6}>
                        <img src={women1} alt="" className="img-fluid" onLoad={handleImageLoad} />
                        <div className="textstripe">
                            Shirts
                        </div>
                    </div>
                    <div className="col-md-2 col-3 stripe22" onClick={handleRedirect7}>
                        <img src={women2} alt="" className="img-fluid" onLoad={handleImageLoad} />
                        <div className="textstripe">
                            T-shirts
                        </div>
                    </div>
                    <div className="col-md-2 col-3 stripe33" onClick={handleRedirect8}>
                        <img src={women3} alt="" className="img-fluid" onLoad={handleImageLoad} />
                        <div className="textstripe">
                            Sarees
                        </div>
                    </div>
                    <div className="col-md-2 col-3 stripe44" onClick={handleRedirect15}>
                        <img src={women4} alt="" className="img-fluid" onLoad={handleImageLoad} />
                        <div className="textstripe">
                            Tops
                        </div>
                    </div>

                    <div className="col-md-2"></div>

                </div>
            </div>
            <Slide direction="left" in={alertVisible} mountOnEnter unmountOnExit>
                <Alert

                    severity="warning" variant="filled"
                    sx={{
                        position: 'fixed', top: alertTop, right: '2%', transform: 'translateY(-50%)',
                        width: alertWidth,
                        height: alertHeight,
                        display: 'flex',
                        fontSize: alertFont,
                        alignItems: 'center',
                        zIndex: 2
                    }}
                >
                    Please Login to view
                </Alert>
            </Slide>
            <Slide direction="left" in={alertitemVisible} mountOnEnter unmountOnExit>
                <Alert

                    severity="info" variant="filled"
                    sx={{
                        position: 'fixed', top: alertTop, right: '2%', transform: 'translateY(-50%)',
                        width: alertWidth,
                        height: alertHeight,
                        display: 'flex',
                        fontSize: alertFont,
                        alignItems: 'center',
                        zIndex: 2
                    }}
                >
                    The category has not yet been added
                </Alert>
            </Slide>
        </div>
    )
}

export default Womens
