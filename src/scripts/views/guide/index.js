

import "./index.scss";
import React , {Component} from "react";

import {Swipe} from "../../components/swipe"

export class Guide extends Component {

    state = {
        imgs:[
            require("../../../assets/images/slide1.png"),
            require("../../../assets/images/slide2.png"),
            require("../../../assets/images/slide3.png"),
            require("../../../assets/images/slide4.png")
        ]
    }

    gotoApp=(id)=>{
        console.log(id);
        if(id==this.state.imgs.length-1){
            let {history} = this.props;
            history.push("/app/");
        }
    }

    componentWillMount(){
        if(localStorage.appVisit){
            // 已经访问过
            localStorage.appVisit++;
            if(localStorage.appVisit>3){
                let {history} = this.props;
                history.push("/app/");
            }
        }else{
            localStorage.appVisit = 1;
        }
    }



    render(){
        let images =  this.state.imgs.map((img,index)=>{
            return (<img onClick={()=>this.gotoApp(index)} className="img" src={img} alt="" key={index} />)
        })
        return (
            <div className="section">
                <Swipe url="http" id="guide" swiperOptions={ {loop:false,autoPlay:false} } >
                    {images}
                </Swipe>
            </div>
        )
    }
}