import React, { useContext, useEffect, useState } from 'react'
import './Kids.css'
import banner3 from '../src/img/banner3.jpg'
import kids1 from '../src/img/kids1.jpg'
import kids2 from '../src/img/kids2.jpg'
import kids3 from '../src/img/kids3.jpg'
import kids5 from '../src/img/kids5.jpg'
import { useNavigate,useLocation} from 'react-router-dom'
import DataContext from './context/DataContext'
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import Loading from "./Loading";
import { authenticate } from './services/Auth';

import { useTheme, useMediaQuery } from '@mui/material';



const Kids = () => {
    const { setIsActiveHome, setIsActiveMens, setIsLoggedIn,
        setIsActiveWomens, setIsActiveKids, isLoggedIn } = useContext(DataContext);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertitemVisible, setAlertitemVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { pathname } = useLocation();

    const alertWidth = isSmallScreen ? '90%' : '400px';
    const alertHeight = isSmallScreen ? '25px' : '50px';
    const alertFont = isSmallScreen ? '11px' : '16px';
    const alertTop = isSmallScreen ? '8%' : '12%';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    useEffect(() => {
        const checkAuthentication = () => {
            setIsLoggedIn(authenticate());
        };

        checkAuthentication();

    }, [setIsLoggedIn])
    useEffect(
        () => {
            setIsActiveHome(false);
            setIsActiveMens(false);
            setIsActiveWomens(false);
            setIsActiveKids(true);
        }, [setIsActiveHome,setIsActiveMens,setIsActiveWomens,setIsActiveKids]
    )
    const navigate = useNavigate();
    const handleImageLoad = () => {
        // Check if all images are loaded
        if (document.querySelectorAll('.img-fluid:not([loaded])').length === 0) {
            setLoading(false);
        }
    };
    const handleRedirect9 = () => {
        if (isLoggedIn) {
            navigate('/kidsshirt');

        }
        else {
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 3500);
        }
    };
    const handleRedirect10 = () => {
        if (isLoggedIn) {
            navigate('/kidstshirt');

        }
        else {
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 3500);
        }
    };
    const handleRedirect16 = () => {
        setAlertitemVisible(true);
        setTimeout(() => {
            setAlertitemVisible(false);
        }, 3500);
    }
    const handleRedirect17 = () => {
        setAlertitemVisible(true);
        setTimeout(() => {
            setAlertitemVisible(false);
        }, 3500);
    }
    useEffect(() => {
        // Simulate API or resource loading
        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        },);

        // Clear the loading timeout on component unmount or when data is fully loaded
        return () => clearTimeout(loadingTimeout);
    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 kidsbanner">
                        <img src={banner3} alt="" className="img-fluid" onLoad={handleImageLoad} />
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row mb-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 display-5 fw-lighter text-center">
                        Kids Categories
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row containermens">
                    <div className="col-md-2"></div>
                    <div className="col-md-2 col-6 stripe111" onClick={handleRedirect9}>
                        <img src={kids1} alt="" className="img-fluid" onLoad={handleImageLoad} />
                        <div className="textstripe">
                            Shirts
                        </div>
                    </div>
                    <div className="col-md-2 col-6 stripe222" onClick={handleRedirect10}>
                        <img src={kids2} alt="" className="img-fluid" onLoad={handleImageLoad} />
                        <div className="textstripe">
                            T-shirts
                        </div>
                    </div>
                    <div className="col-md-2 col-6 stripe333" onClick={handleRedirect16}>
                        <img src={kids3} alt="" className="img-fluid" onLoad={handleImageLoad} />
                        <div className="textstripe">
                            Coats
                        </div>
                    </div>
                    <div className="col-md-2 col-6 stripe444" onClick={handleRedirect17}>
                        <img src={kids5} alt="" className="img-fluid" onLoad={handleImageLoad} />
                        <div className="textstripe">
                            Lowers
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

export default Kids
