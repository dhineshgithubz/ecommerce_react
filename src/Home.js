import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useEffect, useState } from 'react';

import './Home.css';
import './Carousel.css';
import car1 from '../src/img/car1.jpg';
import car2 from '../src/img/car2.jpg';
import car3 from '../src/img/car3.jpg';
import car4 from '../src/img/car4.jpg';
import { useTheme, useMediaQuery } from '@mui/material';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import newproduct1 from '../src/img/newproduct1.png'
import newproduct2 from '../src/img/newproduct2.png'
import newproduct3 from '../src/img/newproduct3.png'
import newproduct4 from '../src/img/newproduct4.png'
import newproduct5 from '../src/img/kids4.png'
import newproduct7 from '../src/img/newproduct7.png'
import p1 from '../src/img/p1.jpg'
import p2 from '../src/img/p2.jpg'
import p3 from '../src/img/p3.jpg'
import p4 from '../src/img/p4.jpg'
import p5 from '../src/img/women2.jpg'
import men5 from '../src/img/men5.jpg'
import p7 from '../src/img/p7.jpg'
import p8 from '../src/img/p8.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper';
import { authenticate } from './services/Auth';
import { Link} from 'react-router-dom';
import DataContext from './context/DataContext';

const Home = () => {

  const { setIsLoggedIn, setIsActiveHome, setIsActiveMens, setIsActiveWomens, setIsActiveKids } = useContext(DataContext);
  const [alertVisible] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const alertWidth = isSmallScreen ? '70%' : '400px';
  const alertHeight = isSmallScreen ? '25px' : '50px';
  const alertFont = isSmallScreen ? '11px' : '16px';
  const alertTop = isSmallScreen ? '8%' : '12%';
  
  useEffect(() => {
    const carousel = new window.bootstrap.Carousel(document.getElementById('carousel-example-generic'), {
      interval: 3000,
    });

    return () => {
      carousel.dispose();
    };
  }, []);
  
  useEffect(
    () => {
      setIsActiveHome(true);
      setIsActiveMens(false);
      setIsActiveWomens(false);
      setIsActiveKids(false);
    }, [setIsActiveHome, setIsActiveMens, setIsActiveWomens, setIsActiveKids]
  )
  useEffect(() => {
    const checkAuthentication = () => {
      setIsLoggedIn(authenticate());
    };

    checkAuthentication();

  }, [setIsLoggedIn])




  return (
    <div>


      <div>

        <div className="carousel margincarousel slide vertical" id="carousel-example-generic" data-bs-ride="carousel" data-bs-interval="3000">
          <ol className="carousel-indicators">
            <li data-bs-target="#carousel-example-generic" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carousel-example-generic" data-bs-slide-to="1" className=""></li>
            <li data-bs-target="#carousel-example-generic" data-bs-slide-to="2" className=""></li>
            <li data-bs-target="#carousel-example-generic" data-bs-slide-to="3" className=""></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={car1} className="car1" alt="" />

            </div>
            <div className="carousel-item">
              <img src={car2} className="car2" alt="" />

            </div>
            <div className="carousel-item">
              <img src={car3} className="car2" alt="" />

            </div>
            <div className="carousel-item">
              <img src={car4} className="car2" alt="" />

            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid">
        <h1 className="heading">New Arrivals</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}

          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            spaceBetween: 0,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide className="si">


            <div className="card1">


              <div className="row">
                <div >
                  <img src={newproduct1} alt="" className="image1" />
                </div>

              </div>
              <div className="row">
                <div className="productname textproduct1 fs-1 text-black  text-center fw-light">
                  Ren womens T-shirts
                </div>

              </div>

              <div className="row">
                <div className="d-flex justify-content-between">
                  <div className="price fs-2 text-black mx-3">
                    From  &#8377;399
                  </div>

                  <Link to='/womens' className="view mx-3">View</Link>


                </div>

              </div>


            </div>
          </SwiperSlide>
          <SwiperSlide className="si">
            <div className="card1 bgcard2">


              <div className="row">
                <div >
                  <img src={newproduct2} alt="" className="image1" />
                </div>

              </div>
              <div className="row">
                <div className="productname textproduct1 fs-1 text-black  text-center fw-light">
                  New sweat shirts
                </div>

              </div>

              <div className="row">
                <div className="d-flex justify-content-between">
                  <div className="price fs-2 text-black mx-3">
                    From  &#8377;599
                  </div>
                  <Link to='/mens' className="view mx-3">View</Link>

                </div>

              </div>


            </div>
          </SwiperSlide >
          <SwiperSlide className="si">
            <div className="card1 bgcard3">


              <div className="row">
                <div >
                  <img src={newproduct3} alt="" className="image1" />
                </div>

              </div>
              <div className="row">
                <div className="productname textproduct1 fs-1 text-black  text-center fw-light">
                  Plum womens coats
                </div>

              </div>

              <div className="row">
                <div className="d-flex justify-content-between">
                  <div className="price fs-2 text-black mx-3">
                    From  &#8377;999
                  </div>
                  <Link to='/womens' className="view mx-3">View</Link>


                </div>

              </div>


            </div>
          </SwiperSlide>
          <SwiperSlide className="si">
            <div className="card1 bgcard4">


              <div className="row">
                <div >
                  <img src={newproduct4} alt="" className="image1" />
                </div>

              </div>
              <div className="row">
                <div className="productname textproduct1 fs-1 text-black  text-center fw-light">
                  Harbor Hoodies
                </div>

              </div>

              <div className="row">
                <div className="d-flex justify-content-between">
                  <div className="price fs-2 text-black mx-3">
                    From  &#8377;399
                  </div>
                  <Link to='/mens' className="view mx-3">View</Link>

                </div>

              </div>


            </div>
          </SwiperSlide>

          <SwiperSlide className="si">
            <div className="card1 bgcard5">


              <div className="row">
                <div >
                  <img src={newproduct5} alt="" className="image1" />
                </div>

              </div>
              <div className="row">
                <div className="productname textproduct1 fs-1 text-black  text-center fw-light">
                  Latest collection for kids
                </div>

              </div>

              <div className="row">
                <div className="d-flex justify-content-between">
                  <div className="price fs-2 text-black mx-3">
                    From  &#8377;199
                  </div>
                  <Link to='/kids' className="view mx-3">View</Link>


                </div>

              </div>


            </div>
          </SwiperSlide>

          <SwiperSlide className="si">
            <div className="card1 bgcard6">


              <div className="row">
                <div >
                  <img src={newproduct7} alt="" className="image1" />
                </div>

              </div>
              <div className="row">
                <div className="productname textproduct1 fs-1 text-black  text-center fw-light">
                  zen new jacket
                </div>

              </div>

              <div className="row">
                <div className="d-flex justify-content-between">
                  <div className="price fs-2 text-black mx-3">
                    From  &#8377;499
                  </div>
                  <Link to='/womens' className="view mx-3">View</Link>


                </div>

              </div>


            </div>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow shadowarrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow shadowarrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
        </Swiper>



        <h1 className="heading">Top Selling</h1>
        <div className="container-fluid">


          <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}


            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[Navigation]}
            className="swiper_container"
          >

            <SwiperSlide className="si2">


              <div className="cardbest">


                <div className="row">
                  <div className="imagebox">
                    <img src={p1} alt="" className="imagebest" />
                  </div>

                </div>
                <div className="row">
                  <div className="productname secondproduct fs-4 text-black  text-center fw-light">
                    White bride
                  </div>

                </div>

                <div className="row">
                  <div className="d-flex justify-content-between">
                    <div className="price fs-3 text-black mx-3">
                      &#8377;399
                    </div>
                    <Link to='/mens' className="view mx-3">View</Link>


                  </div>

                </div>


              </div>
            </SwiperSlide>
            <SwiperSlide className="si2">
              <div className="cardbest">


                <div className="row">
                  <div className="imagebox">
                    <img src={p5} alt="" className="imagebest" />
                  </div>

                </div>
                <div className="row">
                  <div className="productname secondproduct fs-4 text-black  text-center fw-light">
                    Red checked shirt
                  </div>

                </div>

                <div className="row">
                  <div className="d-flex justify-content-between">
                    <div className="price fs-3 text-black mx-3">
                      &#8377;459
                    </div>
                    <Link to='/womens' className="view mx-3">View</Link>


                  </div>

                </div>


              </div>
            </SwiperSlide >
            <SwiperSlide className="si2">
              <div className="cardbest">


                <div className="row">
                  <div className="imagebox">
                    <img src={p2} alt="" className="imagebest" />
                  </div>

                </div>
                <div className="row">
                  <div className="productname secondproduct fs-4 text-black  text-center fw-light">
                    denim shirt
                  </div>

                </div>

                <div className="row">
                  <div className="d-flex justify-content-between">
                    <div className="price fs-3 text-black mx-3">
                      &#8377;399
                    </div>
                    <Link to='/mens' className="view mx-3">View</Link>


                  </div>

                </div>


              </div>
            </SwiperSlide>
            <SwiperSlide className="si2">
              <div className="cardbest">


                <div className="row">
                  <div className="imagebox">
                    <img src={p3} alt="" className="imagebest" />
                  </div>

                </div>
                <div className="row">
                  <div className="productname secondproduct fs-4 text-black  text-center fw-light">
                    Black hoody
                  </div>

                </div>

                <div className="row">
                  <div className="d-flex justify-content-between">
                    <div className="price fs-3 text-black mx-3">
                      &#8377;339
                    </div>
                    <Link to='/mens' className="view mx-3">View</Link>


                  </div>

                </div>


              </div>
            </SwiperSlide>

            <SwiperSlide className="si2">
              <div className="cardbest">


                <div className="row">
                  <div className="imagebox">
                    <img src={p4} alt="" className="imagebest" />
                  </div>

                </div>
                <div className="row">
                  <div className="productname secondproduct fs-4 text-black  text-center fw-light">
                    Royal shirt
                  </div>

                </div>

                <div className="row">
                  <div className="d-flex justify-content-between">
                    <div className="price fs-3 text-black mx-3">
                      &#8377;599
                    </div>
                    <Link to='/womens' className="view mx-3">View</Link>


                  </div>

                </div>


              </div>
            </SwiperSlide>

            <SwiperSlide className="si2">
              <div className="cardbest">


                <div className="row">
                  <div className="imagebox">
                    <img src={p5} alt="" className="imagebest" />
                  </div>

                </div>
                <div className="row">
                  <div className="productname secondproduct fs-4 text-black  text-center fw-light">
                    Red checked shirt
                  </div>

                </div>

                <div className="row">
                  <div className="d-flex justify-content-between">
                    <div className="price fs-3 text-black mx-3">
                      &#8377;590
                    </div>
                    <Link to='/womens' className="view mx-3">View</Link>


                  </div>

                </div>


              </div>
            </SwiperSlide>
            <SwiperSlide className="si2">
              <div className="cardbest">


                <div className="row">
                  <div className="imagebox">
                    <img src={men5} alt="" className="imagebest" />
                  </div>

                </div>
                <div className="row">
                  <div className="productname secondproduct fs-4 text-black  text-center fw-light">
                    Bottle green cargos
                  </div>

                </div>

                <div className="row">
                  <div className="d-flex justify-content-between">
                    <div className="price fs-3 text-black mx-3">
                      &#8377;669
                    </div>
                    <Link to='/mens' className="view mx-3">View</Link>


                  </div>

                </div>


              </div>
            </SwiperSlide>
            <SwiperSlide className="si2">
              <div className="cardbest">


                <div className="row">
                  <div className="imagebox">
                    <img src={p7} alt="" className="imagebest" />
                  </div>

                </div>
                <div className="row">
                  <div className="productname secondproduct fs-4 text-black  text-center fw-light">
                    Pure white t-shirt
                  </div>

                </div>

                <div className="row">
                  <div className="d-flex justify-content-between">
                    <div className="price fs-3 text-black mx-3">
                      &#8377;799
                    </div>
                    <Link to='/mens' className="view mx-3">View</Link>


                  </div>

                </div>


              </div>
            </SwiperSlide>
            <SwiperSlide className="si2">
              <div className="cardbest">


                <div className="row">
                  <div className="imagebox">
                    <img src={p8} alt="" className="imagebest" />
                  </div>

                </div>
                <div className="row">
                  <div className="productname secondproduct fs-4 text-black  text-center fw-light">
                    White bride fashion
                  </div>

                </div>

                <div className="row">
                  <div className="d-flex justify-content-between">
                    <div className="price fs-3 text-black mx-3">
                      &#8377;399
                    </div>
                    <Link to='/womens' className="view mx-3">View</Link>


                  </div>

                </div>


              </div>
            </SwiperSlide>


            <div className="row margintopsell">
              <div className="col-md-2">
                <div className="slider-controler">
                  <div className="swiper-button-prev slider-arrow shadowarrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                  </div>
                </div>
              </div>
              <div className="col-md-8"></div>
              <div className="col-md-2">
                <div className="slider-controler">
                  <div className="swiper-button-next slider-arrow shadowarrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </div>

                </div>
              </div>


            </div>
          </Swiper>
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

  );
}



export default Home