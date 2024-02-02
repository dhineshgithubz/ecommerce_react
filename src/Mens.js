import React, { useEffect, useContext, useState } from 'react'
import './Mens.css'
import banner1 from '../src/img/banner1.jpg'
import men1 from '../src/img/men1.jpg'
import men2 from '../src/img/men2.jpg'
import men3 from '../src/img/men3.jpg'
import men4 from '../src/img/men4.jpg'
import men5 from '../src/img/men5.jpg'
import DataContext from './context/DataContext';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import { useTheme, useMediaQuery } from '@mui/material';
import Loading from "./Loading";
import { authenticate } from './services/Auth';
import { useNavigate,useLocation} from 'react-router-dom'

const Mens = () => {
    const {setIsLoggedIn, setIsActiveHome,setIsActiveMens,
        setIsActiveWomens,setIsActiveKids, isLoggedIn } = useContext(DataContext);
    const navigate = useNavigate();
    const [alertVisible, setAlertVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { pathname } = useLocation();


    const alertWidth = isSmallScreen ? '80%' : '400px';
    const alertHeight = isSmallScreen ? '25px' : '50px';
    const alertFont = isSmallScreen ? '11px' : '16px';
    const alertTop = isSmallScreen ? '8%' : '12%';

    const handleImageLoad = () => {
        if (document.querySelectorAll('.img-fluid:not([loaded])').length === 0) {
            setLoading(false);
        }
    };
    const handleRedirect = () => {
        if (isLoggedIn) {
            navigate('/shirt');

        }
        else {
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 3500);
        }
    };
    const handleRedirect2 = () => {
        if (isLoggedIn) {
            navigate('/hoodie');

        }
        else {
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 3500);
        }
    };
    const handleRedirect3 = () => {
        if (isLoggedIn) {
            navigate('/tshirt');

        }
        else {
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 3500);
        }
    };
    const handleRedirect4 = () => {
        if (isLoggedIn) {
            navigate('/pant');

        }
        else {
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 3500);
        }
    };
    const handleRedirect5 = () => {
        if (isLoggedIn) {
            navigate('/lower');

        }
        else {
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 3500);
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(
        () => {
            setIsActiveHome(false);
            setIsActiveMens(true);
            setIsActiveWomens(false);
            setIsActiveKids(false);
        }, [setIsActiveHome,setIsActiveMens,setIsActiveWomens,setIsActiveKids]
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
                    <div className="col-md-12 col-12 mensbanner">
                        <img src={banner1} alt="" className="img-fluid" onLoad={handleImageLoad} />
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row mb-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 display-5 fw-lighter text-center">
                        Mens Categories
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row containermens">
                    <div className="col-md-1 "></div>

                    <div className="col-md-2 col-4 stripe1" onClick={handleRedirect}>

                        <img src={men1} alt="" className="img-fluid" onLoad={handleImageLoad} />
                        <div className="textstripe">
                            Shirts
                        </div>

                    </div>

                    <div className="col-md-2 col-4 stripe2" onClick={handleRedirect2}>
                        <img src={men2} alt="" className="img-fluid" onLoad={handleImageLoad} />
                        <div className="textstripe">
                            Hoodies
                        </div>
                    </div>
                    <div className="col-md-2 col-4 stripe3" onClick={handleRedirect3}>
                        <img src={men3} alt="" className="img-fluid" onLoad={handleImageLoad} />
                        <div className="textstripe">
                            T-shirts
                        </div>
                    </div>

                    <div className="col-md-2 col-4  stripe4" onClick={handleRedirect4}>
                        <img src={men4} alt="" className="img-fluid" onLoad={handleImageLoad} />
                        <div className="textstripe">
                            Pants
                        </div>
                    </div>
                    <div className="col-4 menshide"></div>
                    <div className="col-md-2 col-4 stripe5" onClick={handleRedirect5}>
                        <img src={men5} alt="" className="img-fluid" onLoad={handleImageLoad} />
                        <div className="textstripe">
                            Lowers
                        </div>
                    </div>
                    <div className="col-md-1  "></div>

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
        </div>
    )
}

export default Mens
