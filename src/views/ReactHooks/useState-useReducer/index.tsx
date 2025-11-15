// Note:
// useState is used when state is simple with 1–2 values.
// useReducer is used when state is complex with objects, arrays, or multiple actions.

import React, { useReducer, useState } from 'react';

interface FormState {
  firstName: string;
  lastName: string;
  education: string;
  address: string;
  location: string;
}

interface Action {
  field: keyof FormState;
  value: string;
}

const formReducer = (state: FormState, action: Action): FormState => {
  return { ...state, [action.field]: action.value };
};

const UseStateUseReducer = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [formState, formDispatch] = useReducer(formReducer, {
    firstName: '',
    lastName: '',
    education: '',
    address: '',
    location: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleReducerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof FormState;
    const value = e.target.value;
    formDispatch({ field: name, value: value });
  };

  console.log({ email, password });
  console.log(formState, 'FormState ++++++++++');
  return (
    <>
      <h2>UseState</h2>
      <div>
        <input
          className="form-control mt-2"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="form-control mt-2"
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <h2>UseReducer</h2>

      <input
        className="form-control mt-2"
        type="text"
        name="firstName"
        value={formState.firstName}
        onChange={handleReducerChange}
        placeholder="FirstName"
      />
      <input
        className="form-control mt-2"
        type="text"
        name="lastName"
        value={formState.lastName}
        onChange={handleReducerChange}
        placeholder="LastName"
      />

      <input
        className="form-control mt-2"
        type="text"
        name="education"
        value={formState.education}
        onChange={handleReducerChange}
        placeholder="Education"
      />
      <input
        className="form-control mt-2"
        type="text"
        name="address"
        value={formState.address}
        onChange={handleReducerChange}
        placeholder="Address"
      />
      <input
        className="form-control mt-2"
        type="text"
        name="location"
        value={formState.location}
        onChange={handleReducerChange}
        placeholder="Location"
      />
    </>
  );
};

export default UseStateUseReducer;
