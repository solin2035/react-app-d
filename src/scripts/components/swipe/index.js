


import  "../../utils/swiper/swiper-3.3.1.min.js";

import React , {Component} from "react";

// this.props.children  vue slot 插槽 

export class Swipe extends Component{
    render(){
        console.log(this.props);
        return (
            <div className="swiper-container" id={this.props.id}>
                <div className="swiper-wrapper">
                    {
                        this.props.children && this.props.children.map((child,index)=>{
                            return (
                                <div className="swiper-slide" key={index}>
                                    {child}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }


    componentDidMount(){
        if(this.props.children.length>0){
            let {id,swiperOptions} = this.props;
            new Swiper("#"+id,swiperOptions);
        }
    }

    componentDidUpdate(){

    }
}