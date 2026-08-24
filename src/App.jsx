import { useState, useEffect } from 'react';

import './App.css'
const pomodoro = 5; //1500s=25m
const shortBreak = 2;  //300s=5m
const longBreak = 4 //900s=15m


function App() {
  //this is where state declarations go - inside the function

  const [secondsLeft, setSecondsLeft] = useState(pomodoro)
  const [isRunning, setIsRunning] = useState(false)

  const [mode, setMode] = useState('pomodoro') //pomodoro,short break, long break

  const [workSessions, setWorkSessions] = useState(0) //how many work sessions starting from 0 

  const modeLabels = {
    pomodoro: 'work',
    shortBreak: 'Short Break',
    longBreak: 'Long Break'
  }

  useEffect(() => {
    //1. the effect itself - code to run
    if (!isRunning) return     //dont start a timer if the timer is paused
    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev == 0) {

          if (mode === 'pomodoro') {
            const newSessionCount = workSessions + 1
            setWorkSessions(newSessionCount)

            if (newSessionCount % 4 == 0) {
              setMode('longBreak')
              return longBreak
            }//END if
            else {
              setMode('shortBreak')
              return shortBreak
            }//END else
          }//END pomodoro if

          else {
            //if program reaches here, means that the mode is on break
            setMode('pomodoro')
            return pomodoro
          }//END else

        }//END if (prev == 0)
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(intervalId)  //the cleanup function
  }, [isRunning, mode, workSessions]);

  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60

  const formattedMinutes = minutes.toString().padStart(2, '0')
  const formattedSeconds = seconds.toString().padStart(2, '0')
  const formattedTime = `${formattedMinutes}:${formattedSeconds}`

  return (
    //this is where the JSX goes
    <>
      <div className='container'>
        <h1>pomodoro timer</h1>
        <h2>{formattedTime}</h2>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>

        {/*this is the reset button*/}
        <button disabled={secondsLeft == pomodoro} onClick={() => setSecondsLeft(pomodoro)}>Reset</button>
        <br></br>
        <br></br>
        <br></br>
        {/*this is a title to show the current work session*/}
        <h2>{modeLabels[mode]}</h2>
      </div>
    </>
  )
}   //component function ends here

export default App
