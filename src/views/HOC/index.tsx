// what is hoc?
// A HOC is a pattern in React that reuses component logic by wrapping another component.”
import type { ToggleInjectedProps } from './Toggle';
import { withToggle } from './Toggle';

export const HOCComponent = ({ isOpen, toggle }: ToggleInjectedProps) => {
  console.log({ isOpen, toggle });
  return (
    <>
      <h2>HOC Concept</h2>
      <hr />
      <h3>{isOpen && <p>Content visible</p>}</h3>
      <button onClick={toggle}>{isOpen ? 'Hide' : 'Show'}</button>
    </>
  );
};

export const HOCComponentWithToggle = withToggle(HOCComponent);
