import React from 'react';
import { images } from '../../assets/images';


export const BillingLeftSideComponent = () => {
    return (
        <div className="col-md-6 staticSection">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <img src={images.pktpay_white} width="300px" className="headerLogo" />
                    <h1>Announcing Bill Payments via PktCash</h1>
                    <p>Pellentesque nec elementum nunc. Nunc mauris diam, volutpat a porta id, tincidunt sed purus. Vestibulu eu congue mi.</p>
                </div>
            </div>  
            </div>
        </div>
    )
}