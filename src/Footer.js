import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPrint } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>

            <div className="container-fluid  text-white">
                <div className="row">
                    <footer className="text-center text-lg-start bg-body-tertiary text-muted bgfooter">
                        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                            <div className="me-5 d-none d-lg-block">
                                <span>Get connected with us on social networks:</span>
                            </div>
                             <div>
                                <a href="https://example.com" className="me-4 text-reset">
                                    <FaFacebook className="iconfoot1" />
                                </a>
                                <a href="https://example.com"  className="me-4 text-reset">
                                    <AiFillTwitterCircle className="iconfoot2" />
                                </a>
                                <a href="https://example.com" className="me-4 text-reset">
                                    <FcGoogle className="iconfoot3" />
                                </a>
                                <a href="https://example.com" className="me-4 text-reset">
                                    <RiInstagramFill className="iconfoot4" />
                                </a>
                                <a href="https://example.com" className="me-4 text-reset">
                                    <FaWhatsappSquare className="iconfoot5" />
                                </a>

                            </div>

                        </section>

                        <section className="">
                            <div className="container text-center text-md-start mt-5">

                                <div className="row mt-3">

                                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                        <h6 className="text-uppercase fw-bold mb-4">
                                            <i className="fas fa-gem me-3"></i>Fashionz
                                        </h6>
                                        <p>
                                            This is an fashion and lifestyle ecommerce website to make shopping easier.
                                        </p>
                                    </div>



                                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                        <h6 className="text-uppercase fw-bold mb-4">
                                            Products
                                        </h6>
                                        <p>
                                            <a href="#!" className="text-reset">Mens</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Womens</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Kids</a>
                                        </p>

                                    </div>



                                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                        <h6 className="text-uppercase fw-bold mb-4">
                                            Useful links
                                        </h6>
                                        <p>
                                            <a href="#!" className="text-reset">Pricing</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Settings</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Orders</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Help</a>
                                        </p>
                                    </div>



                                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                        <p><IoHomeSharp />  INDIA, IN 10012, 43</p>
                                        <p>
                                            <MdEmail />  fashionz@example.com
                                        </p>
                                        <p><FaPhoneAlt /> + 91 2345678812</p>
                                        <p><FaPrint /> + 91 2345678934</p>
                                    </div>

                                </div>

                            </div>
                        </section>



                        <div className="text-center p-4">
                            © 2024 Copyright:
                            <a className="text-reset fw-bold" href="https://example.com">fashionz</a>
                        </div>

                    </footer>

                </div>
            </div>
        </div>
    )
}

export default Footer
