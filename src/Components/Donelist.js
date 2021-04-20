import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {restoretask} from '../Redux/Actions/Actions' 

const Donelist = () => {
    let donelist=useSelector((state)=>state.todos.done)
    const dispatch=useDispatch()
    return (
        <div>
            {donelist.map(item=><li key={item.id}><del>{item.message}</del>
            <button onClick={()=>dispatch(restoretask(item.message, item.id))}>Restore</button>
            </li>)}
        </div>
    )
}

export default Donelist
