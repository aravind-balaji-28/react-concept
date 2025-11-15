// // Note:
// // what is useReducer?
// // useReducer is a React Hook that lets you manage complex state using a reducer function.

import React, { useReducer } from 'react';
type Form = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
};
type State = {
  step: number;
  data: Form;
  error: Form;
};
type Action =
  | { type: 'NEXT' }
  | { type: 'PREV' }
  | { type: 'UPDATE'; field: keyof Form; value: string; errorMessage: string }
  | { type: 'RESET' };

const fields = { firstName: '', lastName: '', email: '', address: '' };
const initialState: State = {
  step: 1,
  data: fields,
  error: fields,
};
const stepReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'NEXT':
      return { ...state, step: state.step + 1 };
    case 'PREV':
      return { ...state, step: state.step - 1 };
    case 'UPDATE':
      return {
        ...state,
        data: { ...state.data, [action.field]: action.value },
        error: { ...state.error, [action.field]: action.errorMessage },
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(stepReducer, initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof Form;
    const value = e.target.value;
    dispatch({ type: 'UPDATE', field: name, value: value, errorMessage: '' });
  };

  const stepButtonRender = (type: string) => {
    const PrevButton = () => {
      return (
        <button
          onClick={() => {
            dispatch({ type: 'PREV' });
          }}
        >
          Prev
        </button>
      );
    };
    const NextButton = () => {
      return (
        <button
          onClick={() => {
            dispatch({ type: 'NEXT' });
          }}
        >
          Next
        </button>
      );
    };

    if (type === 'both') {
      return (
        <>
          <PrevButton />
          <NextButton />
        </>
      );
    }
    if (type === 'prev') {
      return <PrevButton />;
    }
    if (type === 'next') {
      return <NextButton />;
    }
  };
  console.log('State', state);

  const handleSubmit = () => {
    alert('Submitted' + JSON.stringify(state.data));
    dispatch({ type: 'RESET' });
  };
  return (
    <>
      {state.step === 1 && (
        <div>
          <input
            className="form-control"
            name="firstName"
            type="text"
            onChange={handleChange}
            value={state.data.firstName}
            placeholder="First Name"
          />
          {state.error && <p>{state.error.firstName}</p>}
          <input
            className="form-control"
            name="lastName"
            value={state.data.lastName}
            type="text"
            onChange={handleChange}
            placeholder="Last Name"
          />
          {state.error && <p>{state.error.lastName}</p>}
          {stepButtonRender('next')}
        </div>
      )}

      {state.step === 2 && (
        <div>
          <input
            className="form-control"
            name="email"
            type="text"
            value={state.data.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {state.error && <p>{state.error.email}</p>}
          {stepButtonRender('both')}
        </div>
      )}
      {state.step === 3 && (
        <div>
          <input
            className="form-control"
            name="address"
            type="text"
            value={state.data.address}
            onChange={handleChange}
            placeholder="Address"
          />
          {state.error && <p>{state.error.address}</p>}
          {stepButtonRender('prev')}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </>
  );
};
export default UseReducer;
