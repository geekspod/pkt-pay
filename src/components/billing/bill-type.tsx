import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Billing } from '../../class/billing';
import { IBillingReducer, IBillingType, IStore } from '../../interfaces';
import { selectBillType } from '../../store/actions';
import { BillingLeftSideComponent } from './bill-left';


export const BillTypeComponent = (props: RouteComponentProps) => {
    const billing: IBillingReducer = useSelector((state: IStore) => state.billing);
    const dispatch = useDispatch();
    
    const selectType = (id: string) => {
        dispatch(selectBillType(id))
        props.history.push('/bill-id')
    }

    return (
        <div className="">
          <div className="row">
            <BillingLeftSideComponent />
            <div className="col-md-6 dynamicSection">
              <div className="container">
              <div className="row billStatus">
                  <div className="col-md-4">
                    <div className="active-border">Bill Type</div>
                  </div>
                  <div className="col-md-4">
                    <div>Bill ID</div>
                  </div>
                  <div className="col-md-4">
                    <div>Pay Bill</div>
                  </div>                
              </div>
              <div className="row">
                <div className="col-md-12"><h2>Bill Options</h2></div>
              </div>
              <div className="row billOptions">
                {
                    Billing.Types.map((v: IBillingType) => (
                        <div className="col-md-6" key={v.uid} onClick={() => selectType(v.uid)}>
                            <div className="card border-primary mb-3" style={{ maxWidth: '100%', boxShadow: `8px 8px 0px 8px ${v.uid == billing.billType ? 'green': '#171637'}` }}>
                                <div className="card-body text-primary">
                                    <img src={v.icon} />
                                    <h5 className="card-title">{ v.title }</h5>
                                </div>
                            </div>
                        </div>
                    ))
                }
              </div>
              <div className="row">
                <div className="col-md-12"><h3>Recents</h3></div>
              </div>
              <div className="row recentCards">
                
                {
                    Billing.RecentTypes.map((v: IBillingType) => (
                        <div className="col-md-4" key={v.uid} onClick={() => selectType(v.uid)}>
                            <div className="card border-primary mb-3 cableCard" style={{ maxWidth: '100%', boxShadow: `8px 8px 0px 8px ${v.uid == billing.billType ? 'green': '#171637'}` }}>
                                <div className="card-header">{v.title}</div>
                                <div className="card-body text-primary">
                                    <p className="card-text">$25</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
              </div>
            </div>
            </div>
          </div>
      </div>
    )
}