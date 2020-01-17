

const defaultState = {
    mv:[]
}

export default (state=defaultState,action) => {
    switch(action.type){

        case "getMv":
        return {...state,...{mv:action.data}}
        break;


        default:
        return state;
        break;
    }
}