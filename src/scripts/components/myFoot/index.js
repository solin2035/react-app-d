

import React,  {Component} from "react";
import "./index.scss";

import {NavLink} from "react-router-dom"
import {Badge} from "antd-mobile"

export class MyFoot extends Component{

    state = {
        foots:[
            {txt:"首页",path:"/app/home",name:"home",icon:"icon-home"},
            {txt:"分类",path:"/app/classify",name:"classify",icon:"icon-goodsfill"},
            {txt:"购物车",path:"/app/car",name:"car",icon:"icon-shop_car"},
            {txt:"我",path:"/app/my",name:"mine",icon:"icon-my"},
        ] 
    }
    render(){
        return (
            <footer>
                {
                    this.state.foots.map((foot,index)=>{
                        return (
                            <div key={index}>
                                <NavLink to={foot.path} activeClassName="nav-active">
                                    <i className={"iconfont " + foot.icon}></i>
                                    <span> {foot.txt}</span>
                                    {index==2 && <Badge text="8" hot className="hot" /> }
                                </NavLink>
                            </div>
                        )
                    })
                }
            </footer>
        )
    }
}