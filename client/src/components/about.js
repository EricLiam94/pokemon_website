import React from "react";
import {useEffect,useState,useRef} from "react"
import {Link} from "react-router-dom"

function About (){

useEffect(()=>{ 
fetchData();
textRef.current.focus()
},[])

const textRef = useRef()
const [gameStatus,setGameStatus] = useState([])
const [toggleOn,setToggle] = useState(false)
const [text,setText] = useState('');
const fetchData = async()=>{
const data = await fetch("https://test-app-xxxa.herokuapp.com/api/customer")
const items = await data.json();
setGameStatus(items)
return 
}
function clickHandler(e) {
  e.preventDefault();

  if(e.target.type==="button")
    setToggle( (toggleOn) => !toggleOn );
    else if(e.target.type ==="text2")
      setText((text)=> text.subString(0,text.length()-3))
    else
      setText(e.target.value)
};

      const v1 = text
      const v2 = text + 'asd'
        return(
            <div>
            <button id='btn' type="button" onClick={clickHandler} value={toggleOn}> {toggleOn.toString()} </button>
            <textarea type= "text" ref={textRef} onChange={clickHandler} value={v1}  >   </textarea>
            <textarea type = "text2" onChange={clickHandler} value = {v2}/>
            <h4>{text} {toggleOn?'on':'Off'} </h4>
           {gameStatus.map((item,index)=>(
             <Link to={`/about/${index}`}  key={index} >  <h2 > {item.name} </h2></Link>
           )) }
           </div>
          
        )
}

export default About;