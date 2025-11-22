// NOTES:
// what is react-router-dom ?
// React Router DOM is a library for handling dynamic client-side routing in react web application

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseState from './views/ReactHooks/useState/index';
import UseEffect from './views/ReactHooks/useEffect';
import UseRef from './views/ReactHooks/useRef';
import './App.css';
import ControlledUncontrolled from './views/ReactHooks/Controlled-Uncontrolled';
import UseReducer from './views/ReactHooks/useReducer';
import UseStateUseReducer from './views/ReactHooks/useState-useReducer';
import UseCallback from './views/ReactHooks/useCallback';
import Memo from './views/ReactHooks/memo';
import UseMemo from './views/ReactHooks/useMemo';
import Component1 from './views/ReactHooks/useContext/Component1';
import Component3 from './views/ReactHooks/useContext/Component3';
import Component2 from './views/ReactHooks/useContext/Component2';
import Header from './views/ReactHooks/useContext/ThemeContext/Header';
import Counter from './views/ReactHooks/useContext/ThemeContext/Counter';
import UseTransition from './views/useTransition';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="useState" element={<UseState />} />
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="useRef" element={<UseRef />} />
          <Route path="controlled-uncontrolled" element={<ControlledUncontrolled />} />
          <Route path="useReducer" element={<UseReducer />} />
          <Route path="useState-useReducer" element={<UseStateUseReducer />} />
          <Route path="useCallback" element={<UseCallback />} />
          <Route path="memo" element={<Memo />} />
          <Route path="useMemo" element={<UseMemo />} />
          <Route path="component1" element={<Component1 />} />
          <Route path="component2" element={<Component2 />} />
          <Route path="component3" element={<Component3 />} />
          <Route path="header" element={<Header />} />
          <Route path="counter" element={<Counter />} />
          <Route path="useTransition" element={<UseTransition />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
