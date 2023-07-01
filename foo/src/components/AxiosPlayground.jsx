import Axios from "axios";

import "./AxiosPlayground.css";
import { useState } from "react";

// axios allows you to make any GET, POST, PUT, DELETE, etc. request you want

const AxiosPlayground = () => {

  const [joke, setJoke] = useState("(Joke Here)")

  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
      setJoke(response.data.setup + "\n" + response.data.punchline);
    })
  }
  
  return (
    <div className="container">
      
      <h1>testing axios</h1>
      <button onClick={getJoke}>Get Joke</button>
      {joke}
    </div>
  )
}

export default AxiosPlayground;