import React from 'react'
import {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {additem,deleteitem} from '../Redux/Actions/Actions'

const List = () => {
    const dispatch=useDispatch()
    const [data, setData]=useState("")
    const handlesubmit=(e)=>{
        e.preventDefault();
        let input=e.target.userInput.value
        dispatch(additem(input))
        e.target.userInput.value=""
    }
    return (
        <div>
            <form onSubmit={(e)=>handlesubmit(e)}>
            <input name="userInput"></input>
            <button>Add</button>
            </form>
 
            <br/>
            <ul>
                
            </ul>
        </div>
    )
}

export default List
