import React from 'react'
import './Loading.css';
import { ReactComponent as ReactLogo } from '../src/img/loader.svg';

const Loading = () => {
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
