import React from "react";
import { useEffect, useState } from "react";




function ArrowDown(props)
{
    const colors = ['#bdc9c5','#6fc7aa','#0cc789']
    const [idx ,setIdx] = useState(props.idx)
    useEffect(()=>{
         const interval =  setInterval(() => {
                setIdx(idx=> (idx+1)%3 )
            }, 300);
        return () => clearInterval(interval);
    },[])

    return(
            <div style={{color:colors[idx]}}> ▼ </div>
    )
}

export default ArrowDown;