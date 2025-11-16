import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Counter = () => {
  console.log('counter render');
  const { count, setCount } = useContext(ThemeContext);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </>
  );
};

export default Counter;
