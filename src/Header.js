import React, { useEffect, useState, useRef, useContext } from 'react'
import './Header.css'
import { Link} from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { deleteStorage } from './services/Storage';
import { AiFillDelete } from "react-icons/ai";
import { userDetailApi } from './services/Api';
import profilelogo from './img/profilelogo.jpg';
import DataContext from './context/DataContext';
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import { CgMenuLeft } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useTheme, useMediaQuery } from '@mui/material';


const Header = () => {
  const [showCart, setShowcart] = useState(false);
  const [showProfile, setShowprofile] = useState(false);
  const [showSearchInput, setshowSearchInput] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertitemVisible, setAlertitemVisible] = useState(false);
 const navigate = useNavigate();
 const { setorderVisible,setSize, isLoggedIn, setIsLoggedIn, cart, setCart, shakeCart, user, setUser, isActiveHome, setIsActiveHome, isActiveMens, setIsActiveMens,
    isActiveWomens, setIsActiveWomens, isActiveKids, setIsActiveKids } = useContext(DataContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [menu, setMenu] = useState(false);

  const cartSliderRef = useRef(null);
  const profileRef = useRef(null);
  const searchRef = useRef(null);
  const menuRef = useRef(null);
  const storedCartString = localStorage.getItem("storedcart");
  const storedCart = JSON.parse(storedCartString);
  const [menuslide, setMenuslide] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const alertWidth = isSmallScreen ? '90%' : '400px';
  const alertHeight = isSmallScreen ? '25px' : '50px';
  const alertFont = isSmallScreen ? '11px' : '16px';
  const alertTop = isSmallScreen ? '8%' : '12%';

  const menuSlider = () => {
 setMenu(true);
    setMenuslide(!menuslide);
 }

  const closeMenu = () => {
    setMenuslide(!menuslide);
    setMenu(false);
  };

  const headerHomeClick = () => {
    setIsActiveHome(true);
    setIsActiveMens(false);
    setIsActiveWomens(false);
    setIsActiveKids(false);
    setSize(null);
    setMenu(false);

  };
  const headerMensClick = () => {
    setIsActiveHome(false);
    setIsActiveMens(true);
    setIsActiveWomens(false);
    setIsActiveKids(false);
    setSize(null);
    setMenu(false);

  };
  const headerWomensClick = () => {
    setIsActiveHome(false);
    setIsActiveMens(false);
    setIsActiveWomens(true);
    setIsActiveKids(false);
    setSize(null);
    setMenu(false);

  };
  const headerKidsClick = () => {
    setIsActiveHome(false);
    setIsActiveMens(false);
    setIsActiveWomens(false);
    setIsActiveKids(true);
    setSize(null);
    setMenu(false);

  };

  const handleLogout = () => {
    try {
      console.log("logout");
      deleteStorage();
      setIsLoggedIn(false);
      setIsActiveHome(false);
      setIsActiveMens(false);
      setIsActiveWomens(false);
      setIsActiveKids(false);
      setSize(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }

  };
  const handleLogin = () => {
    setIsLoggedIn(false);
    setIsActiveHome(false);
    setIsActiveMens(false);
    setIsActiveWomens(false);
    setIsActiveKids(false);
    setSize(null);
    setMenu(false);
  }
  const handleDeleteCartItem = (itemId) => {
    const updatedCart = storedCart.filter(item => item.id !== itemId);

    localStorage.setItem("storedcart", JSON.stringify(updatedCart));

    setCart(updatedCart);
  };


  const displayCartSlider = () => {
    if (isLoggedIn) {
      setShowcart(!showCart);
      setMenu(false);

    }
    else {
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 3500);
    }


  };
  const displayProfile = () => {
    if (isLoggedIn) {
      setShowprofile(!showProfile);
      setMenu(false);

    }
    else {
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 3500);
    }


  };
  const handleOutsideClick = (event) => {
    if (cartSliderRef.current && !cartSliderRef.current.contains(event.target)) {
      setShowcart(false);
    }
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setShowprofile(false);
    }
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setshowSearchInput(false);
      setOverlayVisible(false);

    }
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenu(false);
    }
  };




  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);

    const filteredSuggestions = searchLists.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(filteredSuggestions);



  };
  const searchLists = ['Mens shirts', 'Mens Tshirts', 'Hoodies for men',
    'Pants for men', 'Lowers for men', 'Womens shirts', 'Tshirts for women',
    'Saress for women', 'Womens tops', 'Kids shirts', 'Tshirt for kids', 'Kids coat',
    'Sweaters for kids'];

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('overlay')) {
      setshowSearchInput(false);
      setOverlayVisible(false);
    }
  });
  const handleSelectSuggestion = (suggestion) => {
    setSearchQuery(suggestion);
    setshowSearchInput(false);
    setOverlayVisible(false);
    switch (suggestion) {
      case 'Mens shirts':
        if (isLoggedIn) {
          navigate('/shirt');
          break;
        }
        else {
          setAlertVisible(true);
          setTimeout(() => {
            setAlertVisible(false);
          }, 3500);
          break;
        }

      case 'Mens Tshirts':
        if (isLoggedIn) {
          navigate('/tshirt');
          break;
        }
        else {
          setAlertVisible(true);
          setTimeout(() => {
            setAlertVisible(false);
          }, 3500);
          break;
        }

      case 'Hoodies for men':
        if (isLoggedIn) {
          navigate('/hoodie');
          break;
        }
        else {
          setAlertVisible(true);
          setTimeout(() => {
            setAlertVisible(false);
          }, 3500);
          break;
        }

      case 'Pants for men':
        if (isLoggedIn) {
          navigate('/pant');
          break;
        }
        else {
          setAlertVisible(true);
          setTimeout(() => {
            setAlertVisible(false);
          }, 3500);
          break;
        }

      case 'Lowers for men':
        if (isLoggedIn) {
          navigate('/lower');
          break;
        }
        else {
          setAlertVisible(true);
          setTimeout(() => {
            setAlertVisible(false);
          }, 3500);
          break;
        }

      case 'Womens shirts':
        if (isLoggedIn) {
          navigate('/womensshirt');
          break;
        }
        else {
          setAlertVisible(true);
          setTimeout(() => {
            setAlertVisible(false);
          }, 3500);
          break;
        }

      case 'Tshirts for women':
        if (isLoggedIn) {
          navigate('/womenstshirt');
          break;
        }
        else {
          setAlertVisible(true);
          setTimeout(() => {
            setAlertVisible(false);
          }, 3500);
          break;
        }

      case 'Saress for women':
        if (isLoggedIn) {
          navigate('/saree');
          break;
        }
        else {
          setAlertVisible(true);
          setTimeout(() => {
            setAlertVisible(false);
          }, 3500);
          break;
        }

      case 'Womens tops':
        setAlertitemVisible(true);
        setTimeout(() => {
          setAlertitemVisible(false);
        }, 3500);
        break;

      case 'Kids shirts':
        if (isLoggedIn) {
          navigate('/kidsshirt');
          break;
        }
        else {
          setAlertVisible(true);
          setTimeout(() => {
            setAlertVisible(false);
          }, 3500);
          break;
        }

      case 'Tshirt for kids':
        if (isLoggedIn) {
          navigate('/kidstshirt');
          break;
        }
        else {
          setAlertVisible(true);
          setTimeout(() => {
            setAlertVisible(false);
          }, 3500);
          break;
        }

      case 'Kids coat':
        setAlertitemVisible(true);
        setTimeout(() => {
          setAlertitemVisible(false);
        }, 3500);
        break;

      case 'Sweaters for kids':
        setAlertitemVisible(true);
        setTimeout(() => {
          setAlertitemVisible(false);
        }, 3500);
        break;


      default:

        break;
    }
    setSuggestions([]);

  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      handleOutsideClick(event);
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOverlayVisible]);


  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await userDetailApi();
        setUser({
          displayName: response.data.users[0].displayName,
          email: response.data.users[0].email,
          localId: response.data.users[0].localId,
        });
      } catch (error) {
        console.error("Error fetching user details:", error.message);
      }
    };

    fetchUserDetails();
  }, [setUser]); 


  const showSearch = () => {
    setshowSearchInput(true);
    setOverlayVisible(prevIsOverlayVisible => !prevIsOverlayVisible);
    setMenu(false);
  }

  function checkOrderVisible() {
    setorderVisible(true);
  }

  return (
    <div >
      <div className="container-fluid bgheader">
        <div className="row py-3">
          <div className="col-2 menu " onClick={menuSlider}>

            <CgMenuLeft />

          </div>
          <div className="col-md-4 col-sm-4 col-8 logo">Fashionz</div>
          <div className="col-2 hidecart">
            <Link onClick={displayCartSlider} className="iconcart"><FaCartShopping />
              <div className={`dot ${shakeCart ? 'shake' : ''}`}>{cart.length}</div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-4 text-center d-flex justify-content-between align-items-center headerhide">
            <Link to="" onClick={headerHomeClick} className={`textHeader ${isActiveHome ? 'active' : ''}`}>Home</Link>
            <Link to="/mens" onClick={headerMensClick} className={`textHeader ${isActiveMens ? 'active' : ''}`}>Mens</Link>
            <Link to="/womens" onClick={headerWomensClick} className={`textHeader ${isActiveWomens ? 'active' : ''}`}>Womens</Link>
            <Link to="/kids" onClick={headerKidsClick} className={`textHeader ${isActiveKids ? 'active' : ''}`}>Kids</Link>
          </div>


          <div className="col-md-4 col-sm-4 d-flex justify-content-around headerhide">
            <div className='iconheart'><IoSearch onClick={showSearch} /></div>
            {isLoggedIn ?
              <Link to="/login" className="textLogin text-center" onClick={handleLogout}>Logout</Link> :
              <Link to="/login" onClick={handleLogin} className="textLogin text-center">Login</Link>
            }
            <Link onClick={displayProfile} className="iconprofile "><CgProfile /></Link>
            <Link onClick={displayCartSlider} className="iconcart"><FaCartShopping />
              <div className={`dot ${shakeCart ? 'shake' : ''}`}>{cart.length}</div>
            </Link>
          </div>
        </div>
      </div>


      {showCart && (
        <div className="row">
          <div className="col-md-8 col-4"></div>
          <div className="col-md-4 col-8">
            <div className="cartslider active" ref={cartSliderRef}>
              <div className="textcart">
                <h2>Cart Items</h2>

                <div>
                  {(Array.isArray(storedCart) && storedCart.length !== 0) ? storedCart.map((item) => (
                    <div key={item.id}>
                      <div className="row">
                        <div className="col-md-10 col-10 border-bottom">
                          <div className='textcart2'>
                            <span><a href="https://example.com">{item.name}</a></span>-
                            <span>{`Size: (${item.size})`}</span>-
                            <span><a href="https://example.com"> Price: Rs.{item.price}</a></span>
                          </div>
                        </div>
                        <div className="col-md-2 col-2 border-bottom">
                          <AiFillDelete className="btndeletecart" onClick={() => handleDeleteCartItem(item.id)} />
                        </div>
                      </div>
                    </div>
                  )) : <div className="textemptycart">
                    Your cart is empty
                  </div>}
                </div>

                {(storedCart.length !== 0) && <Link to="/orderpage" onClick={checkOrderVisible}>
                  <div className='btn btn-success mt-5 fs-3'>
                    Checkout
                  </div>
                </Link>
                }
              </div>
            </div>
          </div>
        </div>
      )}
      {showProfile && (
        <div className="row">
          <div className="col-md-8 col-4"></div>
          <div className="col-md-4 col-8">
            <div className="cartslider active profileslider" ref={profileRef}>
              <div className="textcart">
                <h4>User Profile</h4>

                <div className="profilelogo">
                  <img src={profilelogo} alt="" className="imageprofile" />
                </div>



                <div className="row">
                  <div className="col-md-12 fs-1">
                    {user.displayName}
                  </div>
                  <div className="col-md-12 fs-5 mt-3">
                    Email: {user.email}
                  </div>
                  <div className="col-md-12 fs-5 mt-3">
                    UserId: {user.localId}
                  </div>
                  <div className="row btnprofile">
                    <div className="col-md-12">
                      <div className="btn btn-danger logoutbtn bg-dark w-100" onClick={handleLogout}

                      >
                        Logout
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSearchInput &&
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4 border-3 border border-success">
            <div className={`search-bar searchinput ${isOverlayVisible ? 'overlay' : ''}`} ref={searchRef}>
              <span className="iconheart2"><IoSearch /></span>


              <span>
                <input
                  type="text"
                  placeholder="Enter to search"
                  value={searchQuery}
                  onChange={handleInputChange}
                />
                {searchQuery.trim() && suggestions.length > 0 ? (
                  <ul className="searchdrop">
                    {suggestions.map((suggestion, index) => (
                      <li key={index} onClick={() => handleSelectSuggestion(suggestion)}>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {searchQuery.trim() && suggestions.length === 0 ? (
                  <div className="nomatch">No match found</div>
                ) : null}
              </span>


            </div>
          </div>
        </div>

      }
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
      {
        menu && <div>
          <div className={`menuslider ${menuslide ? 'menuslide' : ''}`} ref={menuRef}>
            <div className="closemenu" onClick={closeMenu}>
              <IoClose />
            </div>
            <div className="menuitems">
              <div className='iconheart' onClick={showSearch} ><IoSearch />  Search</div>
              <div>
                <Link to="" onClick={headerHomeClick} className={`textHeader ${isActiveHome ? 'active' : ''}`}>Home</Link>

              </div>
              <div>
                <Link to="/mens" onClick={headerMensClick} className={`textHeader ${isActiveMens ? 'active' : ''}`}>Mens</Link>

              </div>
              <div>
                <Link to="/womens" onClick={headerWomensClick} className={`textHeader ${isActiveWomens ? 'active' : ''}`}>Womens</Link>

              </div>
              <div>
                <Link to="/kids" onClick={headerKidsClick} className={`textHeader ${isActiveKids ? 'active' : ''}`}>Kids</Link>

              </div>
              <div>
                <Link onClick={displayProfile} className="iconprofile "><CgProfile />  Profile</Link>

              </div>
              <div className="loginicon">
                {isLoggedIn ?
                  <Link to="/login" className="textLogin text-center" onClick={handleLogout}>Logout</Link> :
                  <Link to="/login" onClick={handleLogin} className="textLogin text-center">Login</Link>
                }
              </div>
            </div>
          </div>
        </div>
      }

    </div>
  )
}

export default Header
