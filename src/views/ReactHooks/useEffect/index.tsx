// NOTE:
// what is useEffect ?
// useEffect is a React hook that let you synchronous a component with an external system
// synchronous - means sync external eg: api dom

// clearinterval
// ❌ Without clearInterval()	Old timer keeps running → new timer also starts → multiple timers run
// ✅ With clearInterval()	Old timer is cleared before new one starts → only one timer runs

// working explanation
// You click Stop → setIsCounting(false)

// React re-renders again with isCounting = false

// React now prepares to run the new effect for [isCounting] changes.

// 👉 Before running the new effect, React does this:

// “Wait! The old effect had a cleanup function

import { useEffect, useState } from 'react';

interface TodoInfo {
  title: string;
  completed: boolean;
}
const UseEffect: React.FC = () => {
  const [todoInfo, setTodoInfo] = useState<TodoInfo>({ title: '', completed: false });
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  //Three things of useEffect
  useEffect(() => {
    //The code that we want to run
    getTodoInfo();

    //optional return function
  }, []); // dependencies array (DependencyList)

  const getTodoInfo = () => {
    fetch('http://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => {
        setTodoInfo({ title: data.title, completed: data.completed });
      });
  };

  useEffect(() => {
    console.log('🌀 Effect start | isCounting:', isCounting);

    if (!isCounting) {
      console.log('⛔ Not counting, exiting effect');
      return;
    }

    console.log('▶️ Starting interval...');
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log('⏱ Tick -> count increasing');
    }, 1000);

    console.log('✅ Interval created:', intervalId);

    // Cleanup function
    return () => {
      console.log('🧹 Cleanup running -> clearing interval:', intervalId);
      clearInterval(intervalId);
    };
  }, [isCounting]);

  console.log('🎨 Render | isCounting:', isCounting);

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {todoInfo && Object.keys(todoInfo).length ? (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '1rem',
                border: '1px solid black',
                borderRadius: '15px',
                padding: '2rem',
              }}
            >
              <div> {todoInfo.title}</div>
              <div style={{ color: todoInfo.completed ? 'green' : 'red' }}>
                {' '}
                {todoInfo.completed ? 'Completed' : 'Not Completed'}
              </div>
            </div>
          </>
        ) : (
          <div>No data found</div>
        )}

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '1rem',
            border: '1px solid black',
            borderRadius: '15px',
            padding: '2rem',
          }}
        >
          <h2>{count}s</h2>
          <button
            onClick={() => {
              setIsCounting(true);
            }}
          >
            Start
          </button>
          <button
            onClick={() => {
              setIsCounting(false);
            }}
          >
            Stop
          </button>
          <button
            onClick={() => {
              setIsCounting(false);
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
export default UseEffect;
