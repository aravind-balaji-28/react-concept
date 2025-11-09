// NOTES:
// what is react-router-dom ?
// React Router DOM is a library for handling dynamic client-side routing in react web application

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseState from './views/ReactHooks/useState/index';
import UseEffect from './views/ReactHooks/useEffect';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="useState" element={<UseState />} />
          <Route path="useEffect" element={<UseEffect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
