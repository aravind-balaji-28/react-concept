// Note:
// what is useReducer?
// useReducer is a React Hook that lets you manage complex state using a reducer function.

import { useReducer } from 'react';
const main = 11;
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    case 'uppercase':
      return { ...state, title: state.title.toUpperCase() };
    case 'lowercase':
      return { ...state, title: state.title.toLowerCase() };
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { title: 'Hello world', count: 0 });
  const handleClick = (type: string) => {
    dispatch({ type: type });
  };
  return (
    <>
      <div>
        <h5>{state?.count}</h5>
        <button
          onClick={() => {
            handleClick('increment');
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            handleClick('decrement');
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            handleClick('reset');
          }}
        >
          Reset
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h4>{state?.title}</h4>
        <button
          onClick={() => {
            handleClick('uppercase');
          }}
        >
          Uppercase
        </button>
        <button
          onClick={() => {
            handleClick('lowercase');
          }}
        >
          Lowercase
        </button>
      </div>
    </>
  );
};

export default UseReducer;
