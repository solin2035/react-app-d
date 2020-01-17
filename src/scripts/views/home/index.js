


import React, {Component } from "react";
import "./index.scss"
import { Head } from "../../components/head";
import {Badge,WingBlank, WhiteSpace,Button} from "antd-mobile";

import store from "../../store";
import { countAdd, countDesc, changeCity } from "../../actions";

import {connect} from "react-redux";

// @connect 类 class 装饰器 把很多数据 函数 / 变量 装载类 里面
@connect(
    (state)=>{   // 负责 把state 通过 props 映射到 组件内部
        return {
            ...state,
            newCity:state.city + '1809'
        }
    },
    // (dispatch)=>{   // 声明  组件内部 props 就不会有 dispatch
    //     return {
    //         changeCity:(city)=>dispatch(change(city))
    //     }
    // }
)
export class Home extends Component{
    render(){
        // let {count,num,city } =  store.getState();
        console.log(this.props);
        let {count,num,city, newCity,dispatch} = this.props;
        return (
            <div>
                <Head title="首页" />
                <WingBlank>
                   <h2 className="h2">{count}---- {num} --- {city }  -- {newCity}</h2>
                   <Button type="warning" onClick={ ()=>store.dispatch(countAdd)  }>count ++ </Button>
                   <Button type="primary" onClick={ ()=>store.dispatch(countDesc(20)) } >count -- </Button>
                   <Button type="primary" onClick={ ()=>dispatch(changeCity('美丽的深圳')) } >change City  </Button>

                </WingBlank>
            </div>
        )
    }
}
