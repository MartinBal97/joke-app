import { useEffect, useState } from 'react';
import './App.css';

export default function App() {

  const [btn, setBtn] = useState(true);
  const [joke, setJoke] = useState({})

  useEffect(() => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setJoke(data));
  }, [btn])

  return (
    <>
      <div className='containerJoke'>
        <h3>Don't Laugh Challenge</h3>
        <p>{joke.joke}</p>
        <button onClick={() => setBtn(!btn)}>Get Another Joke</button>
      </div>
    </>
  )
}

