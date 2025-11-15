// Note;
// what is memo?
//  memo lets you skip re-rendering a component when its props are unchanged.

// additional

// Parent re-renders
// Child does NOT re-render
// because name="John" did not change

//Imagine
// React.memo → Think of it like telling React: “Don’t repaint the whole room if nothing has changed.” It prevents unnecessary re-renders when props stay the same.

import { memo, useState } from 'react';
const Memo = () => {
  const [count, setCount] = useState<number>(0);
  console.log('Parent render');
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
      <ChildComponent name="John" />
    </>
  );
};
export default Memo;

const ChildComponent = memo(({ name }: { name: string }) => {
  console.log('Child Component Render');
  return <h2>{name}</h2>;
});
