// Note:

// what is useMemo?
// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

import { useMemo, useState } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');

  //   const double = (() => {
  //     console.log('⚡ Running slow function...');
  //     for (let i = 0; i < 10000000000; i++) {}
  //     return count * 2;
  //   })();

  const double = useMemo(() => {
    console.log('⚡ Running slow function...');
    for (let i = 0; i < 10000000000; i++) {
      /* empty */
    }
    return count * 2;
  }, [count]);

  return (
    <>
      <h4>Count:{double}</h4>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click
      </button>
      <input
        type="text"
        value={text}
        className="form-control mt-4"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
};

export default UseMemo;
