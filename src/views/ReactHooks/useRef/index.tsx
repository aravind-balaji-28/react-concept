// Note:
// What is useRef ?
// useRef is a React Hook that lets you reference a value that’s not needed for rendering.
// ----------------------------------------------------------------------------------------------
// Eg:
// Analytics tracking how many times a user clicks.
import { useRef } from 'react';
const UseRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const buttonRef = useRef<number>(0);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCount = () => {
    buttonRef.current = buttonRef.current + 1;
    alert(buttonRef.current);
    fetch('http://localhost:5000/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ count: buttonRef.current }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <h6>Example 1</h6>
      <div className="d-flex gap-1">
        <div>
          <input type="text" className="form-control" ref={inputRef} />
        </div>
        <div>
          <button className="btn btn-md btn-info " onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>

      <br />
      <h6>Example 2</h6>
      <div>
        <span>
          <button type="button" className="btn btn-sm btn-primary" onClick={handleCount}>
            Click
          </button>
        </span>
      </div>
    </>
  );
};
export default UseRef;
