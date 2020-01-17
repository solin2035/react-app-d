



import React , {Component} from "react"
import ReactDOM, {render} from "react-dom";
import { IndexLayout } from "./views";

const rootElement = document.getElementById("app")

import {Provider} from "react-redux";
import store from "./store";

const hotRender = ()=>{
    render(
        <Provider store={store} >
            <IndexLayout/>
        </Provider>,
        rootElement
    )
}

hotRender()

// store.subscribe(hotRender)  // 重新渲染组件视图    redux  react-redux  Provider 

// mapStateToProps 订阅 state state 发生改变 自动刷新视图  







































// import {Button,WhiteSpace} from "antd-mobile"

// // babel-preset-react 处理JSX 语法 

// // class 类创建组件  
// // props state context 
// class App extends React.Component { 
//     constructor(props){
//         super(props);  // 函数时 指向 父类的  的 构造函数  constructor
//         this.state = {
//             count:2019
//         }

//         // this.add = this.add.bind(this);
//     }
    
//     componentWillMount(){

//     }

//     shouldComponentUpdate(){
//         return true;
//     }

//     // 箭头函数  
//     // 1. 本身没有this  借用函数外部代码块的 this
//     // 2. 箭头函数的this 永远只跟 箭头函数定义的 外部代码的this  有关, 跟执行所处环境的this无关
//     add=()=>{
//         //  Cannot read property 'setState' of undefined  
//         console.log(this);
//         this.setState({
//             count:++this.state.count
//         })
//     }

//     render(){
//         let {count}  = this.state;
//         let {word} = this.props;
//         return (
//             <div>
//                 <h1 className="h1"> App - APP</h1>
//                 <h2 onClick={this.add} >state == {count}</h2>
//                 <h2>props == {word}</h2>
//                 <Menu title="hello react" msg="Are you ok?" ></Menu>
//             </div>
//         )
//     }
// }

// // 组件初始化默认的props 
// App.defaultProps = {
//     word:"this is init props"
// }

// // 函数式组件 
// const Menu = ({title,msg}) => (
//     <div>   
//         <h2>menu-menu-menu</h2>
//         <h2>{title} --  {msg} </h2>
//         <Button>default</Button><WhiteSpace />
//         <Button disabled>default disabled</Button><WhiteSpace />
//         <Button type="primary">primary</Button><WhiteSpace />
//         <Button type="primary" disabled>primary disabled</Button><WhiteSpace />
//         <Button type="warning">warning</Button><WhiteSpace />
//         <Button type="warning" disabled>warning disabled</Button><WhiteSpace />
//         <Button loading>loading button</Button><WhiteSpace />
//         <Button icon="check-circle-o">with icon</Button><WhiteSpace />
//         <Button icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />}>with custom icon</Button><WhiteSpace />
//         <Button icon="check-circle-o" inline size="small" style={{ marginRight: '4px' }}>with icon and inline</Button>
//         <Button icon="check-circle-o" inline size="small">with icon and inline</Button>
//     </div>
// )



// const rootElement = document.getElementById("app")

// render(
//     <App ></App>,
//     rootElement
// )

