import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Billing } from "../../class/billing";
import { IBillingId, IStore } from "../../interfaces";
import { selectBillID, selectIssuerID } from "../../store/actions";
import { BillingLeftSideComponent } from "./bill-left";

export const BillIDComponent = ( props: RouteComponentProps ) => {
    const [ billID, setBillID ] = useState<string>('');
    const billing = useSelector((state: IStore) => state.billing);
    const dispatch = useDispatch();
    console.log(billing);
    
    useEffect(() => {
        if (!billing.billType) props.history.goBack();
        setBillID(billing.billID)
    }, [])


    const clickIssuerID = (id: string) => {
        dispatch(selectIssuerID(id))
    }
    
    const submitForm = () => {
        dispatch(selectBillID(billID))
        props.history.push('/pay-bill')
    }


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
                        <div className="active-border">Bill ID</div>
                    </div>
                    <div className="col-md-4">
                        <div>Pay Bill</div>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <h2>Select Bill Users</h2>
                    <form>
                    <div className="form-group">
                        <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Search Issuer"
                        />
                    </div>
                    </form>
                </div>
                </div>
                <div className="row selectBillUsers mt-3">
                    <div className="row m-0">
                        {
                            Billing.IDs.map((v: IBillingId) => (
                                <div className="col-md-3 mb-3" key={v.uid} onClick={() => clickIssuerID(v.uid)}>
                                    <div
                                    className="card border-primary mb-3"
                                    style={{ maxWidth: '100%', boxShadow: `3px 3px 0px 5px ${v.uid == billing.issuerID ? 'green': '#171637'}` }}>
                                    <div className="card-body text-primary">
                                        <img src={v.icon} className="w-18px"/>
                                        <p className="card-title issuer-title" style={{ fontWeight: 100}}>{v.title}</p>
                                    </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <div className="container">
                    <h3>Enter Bill ID</h3>
                    <form onSubmit={submitForm}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter ID"
                                value={billID}
                                onChange={(v: ChangeEvent<HTMLInputElement>) => setBillID(v.target.value)}
                            />
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};
