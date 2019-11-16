import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokeCell from "./pokecell.js";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Pokemon() {
  
  useEffect(() => {
    fetchData();
  }, []);

  const whiteStyle = { color: "white", textDecoration: "none" };
  const listWidth = { width: "80%", display: "inline-block", alignItems:'center'};
  const h4Style = { display: "flex", width: "50%" , alignItems:"center"};
  const btStyle = {width: "200px" , marginBottom:"60px" , marginTop:"40px" }

  const [gameStatus, setGameStatus] = useState([]);
  const [display, setDisplay] = useState([]);
  const [nextApi, setApi] = useState({});

  const fetchData = async () => { 
    if (  Object.getOwnPropertyNames(nextApi).length == 0 && gameStatus.lenth === undefined ){
    const data = await fetch("https://pokeapi.co/api/v2/pokemon");
    const items = await data.json();
    setApi(items.next);
    setGameStatus(items.results);
    setDisplay(items.results);
    }
    else if ( Object.getOwnPropertyNames(nextApi).length !== 0 ){
      console.log('in')
      const data = await fetch(nextApi);
      const items = await data.json();
    setApi(items.next);
    setGameStatus(item=> item.concat(items.results));
    setDisplay(item=> item.concat(items.results));
    }
  };

  function changeHandler(e) {
    e.preventDefault();
    var query = e.target.value.toLowerCase();
    if (query === "") return setDisplay(gameStatus);
    const res = gameStatus.filter(item => item.name.indexOf(query) != -1);
    setDisplay(res);
    return;
  }

  return (
    <div style={listWidth} >
      <br></br>
      <input
        className = "form-control"
        type="text"
        placeholder="Search pokemon here"
        onChange={changeHandler}
      />
      <br></br>
      <Container >
      <Row  style={whiteStyle} className='align-items-center'>
           <Col ><h2 > Name: </h2></Col>
            <Col ><h2> Front: </h2></Col>
            <Col> <h2> Back: </h2></Col>
          </Row>
      {display.map(item => (
        <Link to={`/pokemons/${item.name}`} key={item.name} style={whiteStyle}>
         <PokeCell id={item.name} />
        </Link>
      ))}
      </Container>
      <button className='btn btn-primary' style={btStyle} onClick={fetchData}> Next</button>
    </div>
  );
}

export default Pokemon;
