import React, { useEffect } from 'react'
import { useState } from 'react';
function Fetch() {
    const [jokes,setJokes] =useState([]);

    const FetchJokes = async() => {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data= await res.json();
        setJokes(data);

    }

    useEffect(()=>{
        FetchJokes();
    },[]);

  return (
    <div className="App">
        <h1>Chuck Norris's Daily Jokes😂</h1>
        <p>{jokes.value}</p>
        <button className='btn' onClick={FetchJokes}>Get a New joke</button>
    </div>
  )
}

export default Fetch