import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [min, setMin] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [intvl, setInvtl] = useState(null);
  const [pause, setPause] = useState(false);

  const startTimer = () => {
    let cnt = 0;
    let minute = 0;
    const interval = setInterval(() => {
      cnt++;
      setCounter(cnt)
      if (cnt == 60) {
        setMin((min) => min + 1);
        cnt = 0;
        minute++;
      }
      if (minute == 60) {
        setHrs((hours) => hours + 1);
        minute = 0;
      }

    }, 1000);

    setInvtl(interval);
    setPause(true);
  }

  const resetTimer = () => {
    clearInterval(intvl);
    setCounter(0);
    setMin(0)
    setPause(false);
    setHrs(0);
  }

  const stopTimer = () => {
    clearInterval(intvl);
  }

  return (
    <>
      <div>
        <h3>Hours : Min : Sec</h3>
        <h3>{hrs} : {min} : {counter}</h3><br />
      </div>
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
