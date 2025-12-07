// What is a Custom Hook?
// A custom hook is a reusable function in React that uses built-in hooks to share logic across components.

import React from 'react';
import { useToggle } from './useToggle';
const CustomHooks: React.FC = () => {
  const [isOpen, toggle] = useToggle({ initial: true });

  return (
    <>
      <h3>{isOpen ? 'On' : 'Off'}</h3>
      <button onClick={toggle}>Click</button>
    </>
  );
};
export default CustomHooks;
