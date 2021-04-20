import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {additem,deleteitem,deleteall,taskdone} from '../Redux/Actions/Actions'

const List = () => {
    const dispatch=useDispatch()
    let list=useSelector((state)=>state.todos.data)
    return (
        <div>
            {list.map(item=><li key={item.id}>{item.message}
            <button onClick={()=>dispatch(taskdone(item.message, item.id))}>Done</button>
             <button onClick={()=>dispatch(deleteitem(item.id))}>Delete</button> </li>)}
            <br/>
            <button onClick={()=>dispatch(deleteall())}>Delete All</button>
        </div>
    )
}

export default List
