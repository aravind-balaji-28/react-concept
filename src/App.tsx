// NOTES:
// what is react-router-dom ?
// React Router DOM is a library for handling dynamic client-side routing in react web application

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseState from '../src/views/useState/index';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="useState" element={<UseState />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
