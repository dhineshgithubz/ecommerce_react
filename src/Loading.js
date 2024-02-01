import React from 'react'
import './Loading.css';
import {useEffect } from 'react'

import { ReactComponent as ReactLogo } from '../src/img/loader.svg';
import { useLocation } from 'react-router-dom';


const Loading = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 bgloading text-center d-flex align-items-center">

                        <ReactLogo />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading
