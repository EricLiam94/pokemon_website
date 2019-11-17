import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";




function ArrowDown(props)
{
    const colors = ['#bdc9c5','#6fc7aa','#0cc789']
    const [idx ,setIdx] = useState(props.idx)
    useState(()=>{
            setInterval(() => {
                setIdx(idx=>idx+1)
            }, 300);

    },[])

    return(
            <div style={{color:colors[idx%3]}}> ▼ </div>
    )
}

export default ArrowDown;