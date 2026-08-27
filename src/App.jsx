import { useState, useEffect, useRef } from 'react';
import './App.css'
import Timer from './components/Timer'
import Controls from './components/Controls'
import SessionInfo from './components/sessionInfo'

const pomodoro = 5; //1500s=25m
const shortBreak = 2;  //300s=5m
const longBreak = 4 //900s=15m



function App() {
  //this is where state declarations go - inside the function

  const [secondsLeft, setSecondsLeft] = useState(pomodoro)
  const [isRunning, setIsRunning] = useState(false)

  const [mode, setMode] = useState('pomodoro') //pomodoro,short break, long break

  const [workSessions, setWorkSessions] = useState(0) //how many work sessions starting from 0 

  const isFirstRender = useRef(true)



  const modeLabels = {
    pomodoro: 'Work',
    shortBreak: 'Short Break',
    longBreak: 'Long Break'
  }

  const modeSounds = {
    pomodoro: '/work chime.mp3',
    shortBreak: '/short break.mp3',
    longBreak: '/long break.mp3'
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


  //calculating the onscreen time 
  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60


  //calculating the onscreen time string
  const formattedMinutes = minutes.toString().padStart(2, '0')
  const formattedSeconds = seconds.toString().padStart(2, '0')
  const formattedTime = `${formattedMinutes}:${formattedSeconds}`

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return  //this is to skip the sound on the first render
    }//END if

    const sound = new Audio(modeSounds[mode])
    sound.play().catch((error) => {
      console.log('Sounf playback failed:', error)
    })
  }, [mode])


  //this is text to show the work cycle and the name of the current session in the cycle
  let positionInCycle = 0
  if (workSessions === 0) {
    positionInCycle = 0
  }//END if
  else if (workSessions % 4 === 0) {
    positionInCycle = 4
  }//END else if
  else {
    positionInCycle = workSessions % 4
  }//END else


  //on screen metrics for session info
  const sessionText = `Session ${positionInCycle} of 4`
  const completedWorkSessions = Math.floor(workSessions / 4)
  const totalWorkSessions = `Total pomodoro sessions compelete : ${completedWorkSessions}`


  return (
    //this is where the JSX goes
    <>

      <Controls
        isRunning={isRunning}
        onToggleRunning={() => setIsRunning(!isRunning)}
        isResetDisabled={secondsLeft === pomodoro}
        onReset={() => setSecondsLeft(pomodoro)}
      />

      <Timer
        formattedTime={formattedTime}
      />

      <SessionInfo
        modeLabels={modeLabels[mode]}
        positionInCycle={sessionText}
        totalWorkSessions={totalWorkSessions}
      />

    </>
  )
}   //component function ends here

export default App
