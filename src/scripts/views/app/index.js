


import React, {Component } from "react";
import "./index.scss"
import {Switch,Route,Redirect} from "react-router-dom";
import { Home } from "../home";
import { Classify } from "../classify";
import { Car } from "../car";
import { My } from "../my";
import { MyFoot } from "../../components/myFoot";

export class App extends Component{
    render(){
        return (
            <div className="section">
                <Switch>
                    <Route path="/app/home" component={Home}  />
                    <Route path="/app/classify" component={Classify}  />
                    <Route path="/app/car" component={Car}  />
                    <Route path="/app/my" component={My}  />
                    <Route render=  { ()=>(<Redirect to="/app/home" />) } />
                    <Route component={Home}  />
                </Switch>

                <MyFoot/>
            </div>
        )
    }
}