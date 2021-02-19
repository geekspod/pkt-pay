import React, { Fragment } from 'react';
import { BillIDComponent, BillTypeComponent, PayBillComponent } from '../billing';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

export const MainLayout = () => {
    return (
        <Fragment>
            <HeaderComponent />
            <main>
                <Router>
                    <Switch>
                        <Route path="/" exact component={BillTypeComponent} />
                        <Route path="/bill-id" exact component={BillIDComponent} />
                        <Route path="/pay-bill" exact component={PayBillComponent} />
                    </Switch>
                </Router>
            </main>
            <FooterComponent />
        </Fragment>
    )
}