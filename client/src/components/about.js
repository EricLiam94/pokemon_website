import React from "react";
import {useEffect,useState} from "react"

function About (){

useEffect(()=>{ 
fetchData();
},[])


const [gameStatus,setGameStatus] = useState([])

const fetchData = async()=>{
const data = await fetch("https://test-app-xxxa.herokuapp.com/api/customer")
const items = await data.json()
setGameStatus(items)
}
        return(
            <div>
           {gameStatus.map((item,index)=>(
               <h2 key={index}> {item.name} </h2>
           )) }
           </div>
        )
}

export default About;