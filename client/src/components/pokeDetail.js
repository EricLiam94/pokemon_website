import  React ,{ useEffect, useState } from "react";
import {useParams} from 'react-router-dom'




function PokeDetail()
{
    var {id} = useParams();
    let [detail,setDetail] = useState({
        state:[],
        height: 0,
        weight:0
    })

    useEffect(()=>{
        fetchDetail()
        return ;
    },[])

   async function  fetchDetail()
    {   
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const res = await data.json()
        setDetail(res)
    }

    return (
        <h1> {id} </h1>

    )

}


export default PokeDetail;