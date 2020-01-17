import { COUNTDESC } from "../actions";


// reducers 就是一个纯函数 
export default (state=2019,action)=>{
    console.log(action);

    switch(action.type){

        case "countAdd":
        state+=10;
        return state;
        break;

        case COUNTDESC:
        state-=action.payload;
        return state;
        break;

        default:
        return state;
        break;
    }
}

// ()=> {return state=2019 }