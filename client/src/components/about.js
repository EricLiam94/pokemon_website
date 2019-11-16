import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokeCell from "./pokecell.js";

function About() {
  useEffect(() => {
    fetchData();
  }, []);

  const whiteStyle = { color: "white", textDecoration: "none" };
  const listWidth = { width: "500px", display: "inline-block" };
  const h4Style = { display: "flex", width: "50%" };

  const [gameStatus, setGameStatus] = useState([]);
  const [display, setDisplay] = useState([]);
  const [nextApi, setApi] = useState({});
  const fetchData = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon");
    const items = await data.json();
    setApi(items.next);
    console.log(items.next);
    setGameStatus(items.results);
    setDisplay(items.results);
  };

  function changeHandler(e) {
    e.preventDefault();
    var query = e.target.value;
    if (query === "") return setDisplay(gameStatus);
    const res = gameStatus.filter(item => item.name.indexOf(query) != -1);
    setDisplay(res);
    return;
  }
  return (
    <div style={listWidth}>
      <br></br>
      <input
        type="text"
        placeholder="Search pokemon here"
        onChange={changeHandler}
      />
      <br></br>
      {display.map(item => (
        <Link to={`/about/${item.name}`} key={item.name} style={whiteStyle}>
          <div style={h4Style}>
            <PokeCell id={item.name} />
            <h4 > {item.name} </h4>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default About;
