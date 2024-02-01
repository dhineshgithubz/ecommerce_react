import React, { useState, useEffect, useContext } from 'react'
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { db, storage } from "../src/firebase/config";
import { collection, getDocs } from 'firebase/firestore';
import { authenticate } from './services/Auth';
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { MdStar } from "react-icons/md";
import './ProductCard.css'
import { useNavigate,useLocation } from 'react-router-dom';
import DataContext from './context/DataContext';
import Loading from "./Loading";
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';


const ProductCard = ({ collectionName, storageName }) => {
    const [images, setImages] = useState([]);
    const { setIsLoggedIn, setorderVisible, cart, size, setSize, setShakeCart, setCart, product, setOrder, setproduct, selectedCard, setSelectedCard } = useContext(DataContext);
    const [loading, setLoading] = useState(true)
    const [alertVisible, setAlertVisible] = useState(false);
    const navigate = useNavigate();
    const { pathname } = useLocation();



    const handleAddToCart = () => {
        let updatedCart = [];
        if (size != null) {
            if (selectedCard !== null && product && product[selectedCard]) {
                const selectedProduct = product[selectedCard];
                const isProductInCart = cart.some((item) => item.id === selectedProduct.id);

                if (isProductInCart) {
                    const updatedCart = cart.map((item) =>
                        item.id === selectedProduct.id ? { ...item, size: size } : item
                    );
                    setCart(updatedCart);
                } else {
                    const productWithSize = {
                        ...selectedProduct,
                        size: size,
                    };
                    updatedCart = [...cart, productWithSize];

                };
                localStorage.setItem('storedcart', JSON.stringify(updatedCart));
                setCart(updatedCart);
                setShakeCart(true);

                setTimeout(() => {
                    setShakeCart(false);
                }, 500);
            }
        } else {
            setAlertVisible(true);
        }
    };

    const handleOrder = () => {
        if (size != null) {
            if (selectedCard !== null && product && product[selectedCard]) {

                setOrder([product[selectedCard]]);
                setorderVisible(false);
                navigate('/orderpage');



            }
        }
        else {
            setAlertVisible(true);
        }

    };

    const handleCardClick = (index) => {
        setSelectedCard(index);
    };

    const handleCloseButtonClick = () => {
        setTimeout(() => {
            setSelectedCard(null);
            setSize(null);
        }, 0);
    };
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const checkAuthentication = () => {
            setIsLoggedIn(authenticate());
        };

        checkAuthentication();

    }, [setIsLoggedIn])

    useEffect(() => {

        const collectionRef = collection(db, collectionName);

        getDocs(collectionRef).then((snapshot) => {
            let results = [];
            snapshot.docs.forEach((doc) => {
                results.push({ ...doc.data(), id: doc.id })
            })

            setproduct(results);

        }).catch((err) => console.log(err));

        try {
            const fetchData = async () => {
                const storageRef = ref(storage, storageName);
                const imagesList = await listAll(storageRef);

                const urlPromises = imagesList.items.map(async (imageRef) => {
                    const url = await getDownloadURL(imageRef);
                    return url;
                });

                const urls = await Promise.all(urlPromises);
                setImages(urls);
                setLoading(false);
            };

            fetchData();
        }
        catch (error) {
            console.error('Error fetching images:', error);
            setLoading(false);
        }
    }, [collectionName,setproduct,storageName]);

    useEffect(() => {
        setTimeout(() => {
            setAlertVisible(false);
        }, 3000);
    }, [alertVisible])


    function selectSize(s) {
        setSize(s);
       }


    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <div className={`body-container ${selectedCard !== null ? 'selected-card' : ''}`}>
                <div className="container-fluid margin">
                    <div className="row">


                        {images.map((url, index) => (
                            <div
                                className={`col-md-3 col-6 col-sm-4 text-center card-container ${selectedCard === index ? 'zoom' : ''} ${selectedCard === index ? 'selected' : ''}`}
                                key={index}
                                onClick={() => handleCardClick(index)}



                            >
                                <div className={`cardlist ${selectedCard === index ? 'cardlistzoom' : ''} `} key={index}>
                                    <div className="row">
                                        {selectedCard === index && <div className={`col-md-6 ${selectedCard === index ? 'textnamezoom' : ''} `}>
                                            {product[index].name}
                                        </div>}
                                        {selectedCard === index && <div className={`col-md-2 col-12 ${selectedCard === index ? 'size' : ''} `}>
                                            <div className='d-flex justify-content-between flexsize'>
                                                <div className={` sizecircle ${size === "S" ? 'clicked' : ""}`} onClick={() => selectSize("S")}>
                                                    S
                                                </div>
                                                <div className={` sizecircle ${size === "M" ? 'clicked' : ""}`} onClick={() => selectSize("M")}>
                                                    M
                                                </div>
                                                <div className={` sizecircle ${size === "L" ? 'clicked' : ""}`} onClick={() => selectSize("L")}>
                                                    L
                                                </div>
                                                <div className={` sizecircle ${size === "XL" ? 'clicked' : ""}`} onClick={() => selectSize("XL")}>
                                                    XL
                                                </div>
                                                <div className={` sizecircle ${size === "XXL" ? 'clicked' : ""}`} onClick={() => selectSize("XXL")}>
                                                    XXL
                                                </div>
                                            </div>
                                        </div>}
                                        <div className="imagelist">
                                            <img src={url} alt={`${index}`} />
                                        </div>
                                        <div className={`${selectedCard === index ? 'textnamehide' : ''} `}>
                                            {product[index].name}
                                        </div>
                                        <div className={`row ratingshow${selectedCard === index ? 'ratingshow1' : ''} `}>
                                            <div className="col-2 col-sm-2 col-md-3 col-xl-3"></div>
                                            <div className={`col-4 col-sm-6 col-md-3 col-xl-3 ${selectedCard === index ? 'rating' : ''} `}>
                                                {product[index].rating}<MdStar />
                                            </div>
                                            <div className="col-1 colhide"></div>
                                            <div className="col-6 col-sm-6 col-md-5 col-xl-5 text-end">
                                                <div className={`${selectedCard === index ? 'textpricezoom' : ''}`}>
                                                    &#8377;{product[index].price}

                                                </div>
                                            </div>
                                        </div>
                                        <div className={`row sizehide${selectedCard === index ? 'showsidehide' : ''}`}>
                                            <div className="col-12">
                                                <div className='d-flex justify-content-center flexsize'>
                                                    <div className={` sizecircle ${size === "S" ? 'clicked' : ""}`} onClick={() => selectSize("S")}>
                                                        S
                                                    </div>
                                                    <div className={` sizecircle ${size === "M" ? 'clicked' : ""}`} onClick={() => selectSize("M")}>
                                                        M
                                                    </div>
                                                    <div className={` sizecircle ${size === "L" ? 'clicked' : ""}`} onClick={() => selectSize("L")}>
                                                        L
                                                    </div>
                                                    <div className={` sizecircle ${size === "XL" ? 'clicked' : ""}`} onClick={() => selectSize("XL")}>
                                                        XL
                                                    </div>
                                                    <div className={` sizecircle ${size === "XXL" ? 'clicked' : ""}`} onClick={() => selectSize("XXL")}>
                                                        XXL
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`row buttonhide${selectedCard === index ? 'showbuttonhide' : ''}`}>
                                            <div className="col-1"></div>
                                            <div className="col-10 text-center">
                                                <button className={`btnAddcart ${size === null ? 'btndisable' : ''}`} onClick={handleAddToCart}>
                                                    ADD TO CART
                                                </button>

                                                <button className={`btnBuy ${size === null ? 'btndisable' : ''}`} onClick={handleOrder}>
                                                    BUY NOW
                                                </button>
                                            </div>
                                            <div className="col-1"></div>

                                        </div>


                                        {selectedCard === index && <div className={`col-md-2 col-12 ${selectedCard === index ? 'size' : ''} `}>
                                            <div className='d-flex justify-content-between flexsize'>
                                                <div className={` sizecircle ${size === "S" ? 'clicked' : ""}`} onClick={() => selectSize("S")}>
                                                    S
                                                </div>
                                                <div className={` sizecircle ${size === "M" ? 'clicked' : ""}`} onClick={() => selectSize("M")}>
                                                    M
                                                </div>
                                                <div className={` sizecircle ${size === "L" ? 'clicked' : ""}`} onClick={() => selectSize("L")}>
                                                    L
                                                </div>
                                                <div className={` sizecircle ${size === "XL" ? 'clicked' : ""}`} onClick={() => selectSize("XL")}>
                                                    XL
                                                </div>
                                                <div className={` sizecircle ${size === "XXL" ? 'clicked' : ""}`} onClick={() => selectSize("XXL")}>
                                                    XXL
                                                </div>
                                            </div>
                                        </div>}



                                    </div>

                                    {product && product[index] && (
                                        <div>



                                            <div className=" py-2 px-1">
                                                <div className="col-md-12  d-flex justify-content-between">
                                                    <div className={`rating   ${selectedCard === index ? 'textratingzoom' && 'ratinghide' : ''} `}>
                                                        {product[index].rating}<MdStar />
                                                    </div>
                                                    {
                                                        selectedCard === index &&
                                                        (
                                                            <div className="addbtnpos hidebuttons">
                                                                <button className={`btnAddcart ${size == null ? 'btndisable' : ''}`} onClick={handleAddToCart}>
                                                                    ADD TO CART
                                                                </button>

                                                                <button className={`btnBuy ${size == null ? 'btndisable' : ''}`} onClick={handleOrder}>
                                                                    BUY NOW
                                                                </button>


                                                            </div>
                                                        )
                                                    }

                                                    <div className={`${selectedCard === index ? 'textpricezoom' && 'hidepricezoom' : ''}`}>
                                                        &#8377;{product[index].price}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {selectedCard === index && (
                                        <div className="close-button">
                                            <IoChevronBackCircleSharp onClick={handleCloseButtonClick} />
                                            <span className='textClick' onClick={handleCloseButtonClick} >Click to go back</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                        ))}




                    </div>
                </div>
            </div>
            <Slide direction="left" in={alertVisible} mountOnEnter unmountOnExit>
                <Alert

                    severity="warning" variant="filled"
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
                    Please select size
                </Alert>
            </Slide>
        </div>
    )
}

export default ProductCard
