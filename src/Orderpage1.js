import './Orderpage1.css';
import React, { useState, useContext, useEffect } from "react";
import DataContext from "./context/DataContext";
import gpay from '../src/img/gpay.png'
import paytm from '../src/img/paytm.png'
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import { authenticate } from './services/Auth';
import { useTheme, useMediaQuery } from '@mui/material';

const Orderpage1 = () => {
  const [alertitemVisible, setAlertitemVisible] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const alertWidth = isSmallScreen ? '90%' : '400px';
  const alertHeight = isSmallScreen ? '25px' : '50px';
  const alertFont = isSmallScreen ? '11px' : '16px';
  const alertTop = isSmallScreen ? '8%' : '12%';


  const handleAlertClick = (e) => {
    e.preventDefault();
    setAlertitemVisible(true);
    setTimeout(() => {
      setAlertitemVisible(false);
    }, 3000);
  };
  const { user } = useContext(DataContext);

  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const { setIsLoggedIn, orderVisible, size, order,setIsActiveHome, setIsActiveMens, setIsActiveWomens, setIsActiveKids } = useContext(DataContext);

  const storedCartString = localStorage.getItem("storedcart");
  const storedCart = JSON.parse(storedCartString);
  const totalPrice = storedCart.reduce((total, item) => total + parseFloat(item.price), 0);
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
      setIsActiveKids(false);
    }, [setIsActiveHome,setIsActiveMens,setIsActiveWomens,setIsActiveKids]
  )

  return (
    <div className="wrapper">
      <div className="header">
        <ul>
          {[1, 2, 3, 4].map((index) => (
            <li key={index} className={`form_${index}_progessbar ${index <= step ? 'active' : ''}`}>
              <div>
                <p style={{ backgroundColor: index <= step ? 'var(--primary)' : 'var(--secondary)' }}>
                  {index}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="form_wrap">
        {step === 1 && (
          <div className="data_info">
            <h2>Your Order Details</h2>
            <div>
              <div>
                <div className="row">
                  <div className="col-md-4 col-lg-3">

                  </div>
                  <div className="col-md-7 mt-5">

                    <form action="" className="">

                      {orderVisible && storedCart && storedCart.map((item) => (
                        <div key={item.id}>
                          <div className="row">
                            <div className="col-md-10">
                              <div className='textcart2'>
                                <span className="text-secondary"><a href="https://example.com">{item.name}</a></span> -
                                <span className="text-secondary">{`Size:(${item.size})`}</span>-
                                <span className="text-secondary"><a href="https://example.com"> Price: Rs.{item.price}</a></span>
                              </div>
                            </div>
                            <div className="col-md-2">

                            </div>
                          </div>


                        </div>
                      ))}{orderVisible &&
                        <div className="row">
                          <div className="col-md-10">
                            <div className="d-flex">
                              <div className="fw-bold fs-2 mt-3">

                                {storedCart.length !== 0 ? (`Total Price: Rs.${totalPrice}`) : "You have not selected any product"}

                              </div>
                              <div>

                              </div>
                            </div>
                          </div>
                        </div>
                      }

                      {!orderVisible &&
                        order && order.map((item) => (
                          <div key={item.id}>
                            <div className="row">
                              <div className="col-md-10">
                                <div className='textcart2'>
                                  <span className="text-secondary"><a href="https://example.com">{item.name}</a></span> -
                                  <span className="text-secondary">{`Size:(${size})`}</span>-
                                  <span className="text-secondary"><a href="https://example.com"> Price: Rs.{item.price}</a></span>
                                </div>
                              </div>
                              <div className="col-md-2">

                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-10">
                                <div className="d-flex">
                                  <div className="fw-bold fs-2 mt-3">
                                    Total Price : Rs.{item.price}
                                  </div>
                                  <div>

                                  </div>
                                </div>
                              </div>
                            </div>



                          </div>
                        ))
                      }

                    </form>
                  </div>

                </div>
              </div>
              <div>

              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="data_info">
            <h2>Confirm Your Name and email </h2>
            <form>
              <div className="row">
                <div className="col-md-3 col-sm-3 col-2">

                </div>
                <div className="col-md-6 col-sm-6 col-6 mt-5 text-center">

                  <form action="" className="">
                    <label htmlFor="">Name: </label>
                    <br />
                    <input type="text" value={user.displayName} />
                    <br />
                    <br />
                    <label htmlFor="">Email: </label>
                    <br />
                    <input type="text" value={user.email} />
                    <br />


                  </form>
                </div>
                <div className="col-md-3">

                </div>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="data_info">
            <h2>Shipping Details</h2>
            <form>
              <div>
                <div className="row">
                  <div className="col-md-4 col-2 col-sm-3 col-lg-3">

                  </div>
                  <div className="col-md-7 col-7 col-sm-7 mt-5 ">

                    <form action="">

                      <div className="text-start">
                        <label htmlFor="">Address Line1: </label>
                        <br />
                        <input type="text" />

                        <br />
                        <label htmlFor="">Address Line2: </label>
                        <br />
                        <input type="text" />
                        <br />
                        <label htmlFor="">State: </label>
                        <br />
                        <input type="text" />
                        <br />
                        <label htmlFor="">Country: </label>
                        <br />
                        <input type="text" />
                        <br />
                        <label htmlFor="">Postal Code: </label>
                        <br />
                        <input type="text" />
                        <br />
                        <label htmlFor="">Gift Wrap:</label>
                        <br />
                        <input type="radio" name="gift" /><label htmlFor="">Yes </label> <input type="radio" name="gift" /><label htmlFor="">No</label>
                      </div>





                    </form>
                  </div>

                </div>
              </div>
            </form>
          </div>
        )}
        {step === 4 && (
          <div className="data_info">
            <h2>Payment</h2>
            <form>
              <div>
                <div>
                  <div className="row">
                    <div className="col-md-4 col-sm-4 col-2 col-lg-3">

                    </div>
                    <div className="col-md-7 col-sm-7 col-7 mt-5 text-start">

                      <form action="">
                        <input type="radio" name="pay" style={{ "marginRight": "20px" }} />
                        <img src={gpay} alt="" style={{ "width": "130px", "height": "30px" }} />

                        <br />
                        <br />
                        <input type="radio" name="pay" style={{ "marginRight": "20px" }} />

                        <img src={paytm} alt="" style={{ "width": "100px", "height": "30px" }} />
                        <br />
                        <br />
                        <input type="radio" name="pay" style={{ "marginRight": "20px" }} />

                        <label htmlFor="">Other UPI </label><input type="text" placeholder='Enter UPI ID' style={{ "marginLeft": "10px" }} />
                        <br /><br />
                        <input type="radio" name="pay" style={{ "marginRight": "20px" }} />

                        <label htmlFor="">Cash on delivery</label>
                        <br />
                        <br />



                      </form>
                    </div>

                  </div>
                </div>
                <div>
                  <form className="measure">

                    <div className="">

                    </div>
                  </form>
                </div>
              </div>
              <Slide direction="left" in={alertitemVisible} mountOnEnter unmountOnExit>
                <Alert

                  severity="info" variant="filled"
                  sx={{
                    position: 'fixed', top: alertTop, right: '6%', transform: 'translateY(-50%)',
                    width: alertWidth,
                    height: alertHeight,
                    display: 'flex',
                    fontSize: alertFont,
                    alignItems: 'center',
                    zIndex: 2
                  }}
                >
                  This feature is not yet added

                </Alert>
              </Slide>
            </form>
          </div>
        )}
      </div>

      <div className="btns_wrap">
        {step === 1 && (
          <div className="common_btns">
            <button type="button" className="btn_next" onClick={handleNext}>
              Next <span className="icon"><ion-icon name="arrow-forward-sharp"></ion-icon></span>
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="common_btns">
            <button type="button" className="btn_back" onClick={handleBack}>
              <span className="icon"><ion-icon name="arrow-back-sharp"></ion-icon></span>Back
            </button>
            <button type="button" className="btn_next" onClick={handleNext}>
              Next <span className="icon"><ion-icon name="arrow-forward-sharp"></ion-icon></span>
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="common_btns">
            <button type="button" className="btn_back" onClick={handleBack}>
              <span className="icon"><ion-icon name="arrow-back-sharp"></ion-icon></span>Back
            </button>
            <button type="button" className="btn_done" onClick={handleNext}>
              Next
            </button>
          </div>
        )}
        {step === 4 && (
          <div className="common_btns">
            <button type="button" className="btn_back" onClick={handleBack}>
              <span className="icon"><ion-icon name="arrow-back-sharp"></ion-icon></span>Back
            </button>
            <button type="button" className="btn_done fs-6" onClick={handleAlertClick}>
              Make Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orderpage1;
