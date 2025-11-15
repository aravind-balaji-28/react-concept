// Note:
// what is useCallback?
// useCallback is a React Hook that lets you cache a function definition between re-renders.

// additional

// without callback
// Every render creates a new handleClick function. So React.memo sees a new function reference and re-renders the child
// with callback
// useCallback prevents a new function reference

//Imagine

// useCallback → Think of saving a phone number in your contacts ☎️. Instead of writing it fresh every time, you just reuse the saved one. It helps when passing functions to child components.

import { memo, useCallback, useState } from 'react';

type ChildProps = {
  onAction: () => void;
};
const UseCallback = () => {
  const [count, setCount] = useState<number>(0);

  //   const handleClick = () => {
  //     setCount((prev) => prev + 1);
  //   };

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <h4>Parent Component</h4>
      <h5>Count :{count}</h5>
      <button className="btn btn-primary" onClick={handleClick}>
        Click
      </button>
      <ChildComponent onAction={handleClick} />
    </>
  );
};
export default UseCallback;

const ChildComponent = memo(({ onAction }: ChildProps) => {
  console.log('Render Child Component');
  return (
    <>
      <h4 className="mt-3">Child Component</h4>
      <button className="btn btn-success mt-3" onClick={onAction}>
        Click
      </button>
    </>
  );
});
