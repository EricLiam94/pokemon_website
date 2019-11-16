import React,{useState,useEffect} from 'react';



function PokeCell(props)
{
    const [pokeImg,setPokeImg] = useState({})
    
   const fetchPoke = async() => 
    {   
        const data =  await fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
        const pokeItem = await data.json()
        setPokeImg(pokeItem.sprites)
        return;
    }

    useEffect(()=>{
        fetchPoke()
    },[])

    return (
        <div>
        <img src={pokeImg.front_default}/> 
        </div>
    )

}


export default PokeCell;