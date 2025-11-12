// Note :
// what are controlled and uncontrolled component in reactjs?
// Controlled components rely on React state to manage the form data, while uncontrolled components use the DOM itself to handle form data.
// --------------------------------------------------------------------------------------------------------------

// Controlled = Re-renders on each onChange, updates via state.
// UnControlled = React doesn’t know the value until form submit.

import React, { useState, useRef } from 'react';
const ControlledUncontrolled = () => {
  const [name, setName] = useState('');
  const nameRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submit name controlled:', name);
  };

  console.log('name: ', name);
  const handleSubmit1 = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submit name uncontrolled:', nameRef.current?.value);
  };
  return (
    <>
      <h4>Controlled Example</h4>
      <form onSubmit={handleSubmit} className="d-flex gap-3">
        <input type="text" className="form-control" value={name} onChange={handleChange} />
        <button type="submit" className="btn btn-info  btn-md">
          submit
        </button>
      </form>
      <h4 className="mt-5">UnControlled Example</h4>

      <form onSubmit={handleSubmit1} className="d-flex gap-3">
        <input type="text" className="form-control" ref={nameRef} />
        <button type="submit" className="btn btn-success  btn-md">
          submit
        </button>
      </form>
    </>
  );
};

export default ControlledUncontrolled;
