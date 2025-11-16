import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  console.log('header render');
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <h1>{theme}</h1>
    </>
  );
};

export default Header;
