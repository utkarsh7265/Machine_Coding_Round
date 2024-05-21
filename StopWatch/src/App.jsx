import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [intvl, setInvtl] = useState(null);
  const [pause, setPause] = useState(false);

  const startTimer = () => {
    const interval = setInterval(() => {
      setCounter((cnt) => cnt + 1)
    }, 1000);

    setInvtl(interval);
    setPause(true);
  }

  const resetTimer = () => {
    clearInterval(intvl);
    setCounter(0);
    setPause(false);
  }

  const stopTimer = () => {
    clearInterval(intvl);
  }

  return (
    <>
      <h3>{counter}</h3>
      <div className="card">
        {
          pause ?
            <>
              <button onClick={() => stopTimer()}>
                Stop Timer
              </button>
              <button onClick={() => resetTimer()}>
                Reset Timer
              </button>
            </>
            :
            <button onClick={() => startTimer()}>
              Start Timer
            </button>
        }
      </div>
    </>
  )
}

export default App
