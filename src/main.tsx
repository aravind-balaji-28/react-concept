import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './views/ReactHooks/useContext/ThemeContext/ThemeContext.tsx';
import Counter from './views/ReactHooks/useContext/ThemeContext/Counter.tsx';
import Header from './views/ReactHooks/useContext/ThemeContext/Header.tsx';
// import { AuthProvider } from './views/ReactHooks/useContext/index.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    {/* <AuthProvider> */}
    <ThemeProvider>
      <Header />
      <Counter />
      <App />
    </ThemeProvider>
    {/* </AuthProvider> */}
  </>,
);
