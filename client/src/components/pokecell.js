import React,{useState,useEffect} from 'react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


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
      function capitalize(string) 
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    useEffect(()=>{
        fetchPoke()
    },[])

    return (
        <div>
        <Row  className='align-items-center'>
        <Col> <h4>{capitalize(props.id)} </h4></Col>
        <Col> <img src={pokeImg.front_default}/> </Col>
        <Col> <img src= {pokeImg.back_default}/> </Col>
        </Row>
        </div>
    )

}


export default PokeCell;