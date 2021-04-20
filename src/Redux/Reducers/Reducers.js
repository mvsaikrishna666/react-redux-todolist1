
const initialstate={
    data:[],
    done:[],
};

const todos=(state=initialstate,action)=>{
    switch(action.type){
        case "ADD_ITEM":
            return{...state,
            data:[...state.data,{message:action.payload, id:action.id}]};
        case "DELETE_ITEM":
            const newtodos=state.data.filter((item)=>item.id!==action.id)
            return{...state, data:newtodos};
        case "DELETE_ALL":
            const empty=[]
            return{...state,data:empty};
        case "TASK_DONE":
            const newtodos1=state.data.filter((item)=>item.id!==action.id)
            return{...state,data:newtodos1,done:[...state.done,{message:action.payload, id:action.id}]};
        case "RESTORE_TASK":
            const newdone=state.done.filter((items)=>items.id!==action.id)
            return{...state,done:newdone,data:[...state.data,{message:action.payload, id:action.id}]}
        default:
            return state
    }

}

export default todos;