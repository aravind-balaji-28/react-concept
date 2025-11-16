import { createContext, useState, type ReactNode } from 'react';

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export const ThemeContext = createContext({} as any);
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, setCount, count }}>
      {children}
    </ThemeContext.Provider>
  );
};
