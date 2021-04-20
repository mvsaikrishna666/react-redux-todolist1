import {ADD_ITEM} from './Aciontypes'
import {DELETE_ITEM} from './Aciontypes'
import {DELETE_ALL} from './Aciontypes'
import {TASK_DONE} from './Aciontypes'
import {RESTORE_TASK} from './Aciontypes'

export const additem=(message)=>{
    return{
        type:ADD_ITEM,
        payload:message,  
        id:Math.random()      
    }
};



export const deleteitem=(id)=>{
    return{
        type:DELETE_ITEM,
        id:id,        
    }
};

export const deleteall=()=>{
    return{
        type:DELETE_ALL,
    }
};

export const taskdone=(message,id)=>{
    return{
        type:TASK_DONE,
        payload:message,
        id:id
    }
};

export const restoretask=(message,id)=>{
    return{
        type:RESTORE_TASK,
        payload:message,
        id:id,
    }
}