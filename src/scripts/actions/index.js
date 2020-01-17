


export const countAdd = {
    type:"countAdd"
}


export const COUNTDESC = "COUNTDESC"

export const countDesc = (payload)=> {
    return {
        type:COUNTDESC,
        payload
    }
}

export const CHANGECITY = "CHANGECITY"
export const changeCity = city =>  (
    {
        type:CHANGECITY,
        city
    }
)


import {http} from "../utils";

export const getMv = ({url,limit,cb})=>{
    return http.get(url,{
        params:{
            limit
        }
    }).then(res=>{
        cb();
        return  {
            type:"getMv",
            data:res.data
        }
    })
}