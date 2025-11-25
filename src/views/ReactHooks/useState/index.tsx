// NOTES:
// What is useState ?
// useState is a React Hook that let you add to state variable to your component.

import { useState } from 'react';
const UseState: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleClick = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h3>Count : {count}</h3>
      <div>Helloworld</div>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

export default UseState;
