import React, { useState ,useEffect} from "react"; 
import Happy from './Happy.png'
import Sad from './Sad.png' 
import Like from './Like.png' 
function EmojeeCounter(props){ 
    console.log("pic is ",props.pic) 
    const [pic, setPic]=useState(Happy) 
    const [count,setCount]=useState(0) 
    useEffect(()=>{ 
        console.log ("function called",props.pic) 
        if (props.pic==="Happy") 
            setPic(Happy) 
        else if   (props.pic==="Like") 
            setPic(Like) 
        else if  (props.pic==="Sad") 
            setPic(Sad) 
        }) 
        const ClickHandle=() => { 
            setCount(count+1) 
        }  
return (
    <div className="App"> 
    <p>{props.pic} <span></span> 
    <button onClick={ClickHandle}>{count } 
    <img src={pic} alt=""/> 
    </button> 
    </p> 
    </div> 
)} 
export default EmojeeCounter; 