import { useState, useEffect } from 'react';

import './App.css'
const timeRemaining = 1500;

function App() {
  //this is where state declarations go - inside the function

  const [secondsLeft, setSecondsLeft] = useState(1500)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    //1. the effect itself - code to run
    if (!isRunning) return     //dont start a timer if the timer is paused
    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev == 0) {
          setIsRunning(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(intervalId)  //the cleanup function
  }, [isRunning]);

  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60

  const formattedMinutes = minutes.toString().padStart(2, '0')
  const formattedSeconds = seconds.toString().padStart(2, '0')

  return (
    //this is where the JSX goes
    <>
      <div className='container'>
        <h1>pomodoro timer</h1>
        <h2>{secondsLeft}</h2>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>

        {/*this is the reset button*/}
        <button onClick={() => setSecondsLeft(1500)}>Reset</button>
      </div>
    </>
  )
}   //component function ends here

export default App
