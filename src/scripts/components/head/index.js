import React,  {Component} from "react";
import "./index.scss";

import {NavBar,Icon} from "antd-mobile"

export class Head extends Component{

    render(){
        let {title ,show, history } = this.props;
        console.log(this.props);
        return (
            <NavBar
            mode="dark"
            icon= {show && <Icon type="left" /> }
            onLeftClick={show?() => {history.go(-1)} :console.log("")}
            rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
            ]}
        > 
            {title}
        </NavBar>
        )
    }
}