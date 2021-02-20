import { stat } from "fs";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { images } from "../../assets/images";
import { IStore } from "../../interfaces";
import { BillingLeftSideComponent } from "./bill-left";

export const PayBillComponent = ( props: RouteComponentProps ) => {
    const billing = useSelector((state: IStore) => state.billing);
    

    useEffect(() => {
        if (!billing.billType) props.history.goBack();
    }, [])
    
  return (
    <div className="">
      <div className="row">
        <BillingLeftSideComponent />

        <div className="col-md-6 dynamicSection">
          <div className="container">
          <div className="row billStatus">
              <div className="col-md-4">
                <div>Bill Type</div>
              </div>
              <div className="col-md-4">
                <div>Bill ID</div>
              </div>
              <div className="col-md-4">
                <div className="active-border">Pay Bill</div>
              </div>                
          </div>
          <div className="row">
            <div className="col-md-12">
              <h2>Enter Amount</h2>
              <form>
                <div className="form-group">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Bill Amount in USD" />
                </div>
              </form>
            </div>
          </div>
          <div className="row billOptions">
            <div className="col-md-12">
              <h2>Amount Payable</h2>
              <div className="card border-primary mb-3" style={{ maxWidth: '100%' }}>
                <div className="card-body text-primary">
                  <p>Send 83,333 PKT to</p>
                  <p>pktlqvff8y67ldtzmsrj49dvgp8429r9gfx5nukyv48</p>
                  <p>Order ID: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                  <button type="button" className="btn btn-outline-primary">Copy to Clipboard</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row recentCards">
            <div className="col-md-7">
              <h5>Status<span>9:59</span></h5>
              <ul>
                <li>Awaiting Deposit</li>
                <li>Awaiting Exchange</li>
                <li>Awaiting Payment</li>
              </ul>
            </div>
            <div className="col-md-5">
              <h5>Payment Summary</h5>
              <div className="card border-primary mb-3" style={{ maxWidth: '100%' }}>
                <div className="card-body text-primary">
                  <ul>
                    <li>$.003 <span>per PKT</span></li>
                    <li>$83,333 <span>total PKT</span></li>
                    <li>$250 <span>total USD</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
