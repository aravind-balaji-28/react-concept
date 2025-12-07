// What is a Custom Hook?
// A custom hook is a reusable function in React that uses built-in hooks to share logic across components.

import React from 'react';
import { useToggle } from './useToggle';
const CustomHooks: React.FC = () => {
  const [isOpen, toggle] = useToggle({ initial: true });

  return (
    <>
      <h2>Custom hooks Concept</h2>
      <hr />
      <h3> {isOpen && <p>Content visible</p>}</h3>
      <button onClick={toggle}>{isOpen ? 'Hide' : 'Show'}</button>
    </>
  );
};
export default CustomHooks;
