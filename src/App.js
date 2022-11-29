import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import data from "./assets/data.json";
import { ReactDOM } from 'react-dom';
import { RadioGroup,FormControl,FormLabel, FormControlLabel, Radio } from '@mui/material';

import Politician from "./components/Politician";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
data.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {

  const [cart, setCart] = useState([])
  const [filter, setFilter] = useState(data);

  const [count, setCount] = useState(0);
  const [money, setMoney] = useState(0);

  const [party, setParty] = useState("all");
  const [chamber, setChamber] = useState("all");
  const [sort, setSort] = useState("all");

  useEffect(() => {
    let matchesParty = false
    let matchesChamber = false
    const newFilter = data.filter(el => {
      if (party !== "all") {
        matchesParty = el.party == party
      } else {
        matchesParty = true
      }
      if (chamber !== "all") {
        matchesChamber = el.legislativebody == chamber
      } else {
        matchesChamber = true
      }
      return matchesParty && matchesChamber
      // conditionals to filter the list depending on party and chamber
    })
    setFilter(newFilter)

    let output = 0
    const newSort = newFilter.sort((a,b) => {
      if (sort === "agea") {
        output = a.age - b.age
      } 
      if (sort === "aged") {
        output = b.age - a.age
      }
      return output
      // conditionals to sort the list depending on ascending or descending
    })
    setFilter(newSort)
    // the following states will trigger useEffect automatically
  }, [party, chamber, sort])

  function handleType_p(e) {
    setParty(e.target.value);
  }

  function handleType_c(e) {
    setChamber(e.target.value);
  }

  function age_change(e) {
    setSort(e.target.value)
  }

  return (
    <div className="App">
      <h1>Vote and Lobbying Tracker</h1> 

      <div className="filter">

        <div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Party</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={handleType_p}
            >
              <FormControlLabel value="Democrat" eventkey="democrat" control={<Radio />} label="Democrat" />
              <FormControlLabel value="Republican" eventkey="republican" control={<Radio />} label="Republican" />
              <FormControlLabel value="all" eventkey="All" control={<Radio />} label="All / Reset" />

            </RadioGroup>
          </FormControl>
        </div>

        <br></br>
        <br></br>

        <div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Legislative Body</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={handleType_c}
            >
              <FormControlLabel value="House of Representatives" control={<Radio />} label="House" />
              <FormControlLabel value="Senate" control={<Radio />} label="Senate" />
              <FormControlLabel value="all" control={<Radio />} label="All / Reset" />

            </RadioGroup>
          </FormControl>
        </div>

        <br></br>
        <br></br>

        <div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Sort by:</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="reset"
              name="radio-buttons-group"
              onChange={age_change}
            >
              <FormControlLabel value="agea" control={<Radio />} label="Age (ascending)" />
              <FormControlLabel value="aged" control={<Radio />} label="Age (descending)" />
            </RadioGroup>
          </FormControl>
        </div>

        <br></br>
        <br></br>

        <div>
          <button onClick={() => {
                    setCart([])
                    setCount(0)
                    setMoney(0)
                  }
              }>Reset Supporters / Accumulator</button>
        </div>

        <br></br>

        <div>
          <h3>Supporters</h3>
          <div>
            {
            cart.map((item, index) => ( 
            <div>
              {item}
            </div>
            ))}
          </div>
          <h4>Votes: {count}</h4>
          <h4>Lobbyist funding: {money}</h4>
        </div>
      </div>

      <div className="people">
        {filter.map((item) => ( 
          <Politician name={item.name} title={item.title} leg={item.legislativebody} age={item.age} party={item.party} lobby={item.lobby} image={item.image} cart={cart} setCart={setCart} count={count} setCount={setCount} money={money} setMoney={setMoney} />
        ))}
      </div>

    </div>
    
  );
}
export default App;

