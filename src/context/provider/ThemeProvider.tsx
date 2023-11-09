import { ReactElement, createContext, useState } from 'react';

interface ThemeProviderProps {
  children: ReactElement;
}

export const ThemeContext = createContext({ theme: 'dark', toggle: () => {} });

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
