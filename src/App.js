import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    let interval;
    if (started) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10);
    }
    else if (!started) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [started])

  return (
    <>
    <div className='flex flex-col items-center justify-center my-5'>
      <h1 className='font-bold text-5xl'> STOP WATCH</h1>
      <div className='text-purple-400 font-bold text-2xl py-5'>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {started ? (<button onClick={() => setStarted(false)} className='bg-blue-400 border-blue-700 rounded-md px-6 m-2'>Stop</button>) 
                 : (<button onClick={() => setStarted(true)} className='bg-green-400 border-green-700 rounded-md px-6 m-2'>Start</button>)}

        <button onClick={() => setTime(0)} className='bg-red-400 border-red-700 rounded-md px-6 m-2'>Reset</button>
      </div>
      </div>
    </>
  );
}

export default App;
