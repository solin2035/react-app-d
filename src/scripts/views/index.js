

import React, {Component} from "react";

import {HashRouter as Router  , BrowserRouter ,Route,Switch,Redirect} from "react-router-dom";
import { Guide } from "./guide";
import { App } from "./app";
import { Login } from "./login";

//  主组件   
export class IndexLayout extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/"  exact   component={Guide}  />
                    <Route path="/app/:tab?" component={App} />
                    <Route path="/login" component={Login}/>
                    <Route  render={()=>{
                        return <Redirect to="/app/home" />
                    }}
                    />
                </Switch>
            </Router>
        )
    }
}