// what is useLayoutEffect?
// useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.

import { useLayoutEffect, useRef, useState } from 'react';

const UseLayoutEffect = () => {
  console.log('');
  const textRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  useLayoutEffect(() => {
    if (!textRef.current) return;
    const dimension = textRef.current.getBoundingClientRect();
    textRef.current.style.border = '1px solid #252525';
    textRef.current.style.paddingTop = `${dimension.height}px`;
    textRef.current.style.paddingTop = `2px`;
    console.log(' `${dimension.height}px`: ', `${dimension.height}px`);
  }, [open]);

  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="btn btn-outline-dark"
      >
        click
      </button>
      {open && <h4 ref={textRef}>Code Bless You</h4>}
    </>
  );
};

export default UseLayoutEffect;
