import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../../context/provider/ThemeProvider';

function Header() {
  const { theme, toggle } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').setAttribute('data-theme', 'dark');
      return;
    }

    document.querySelector('html').setAttribute('data-theme', 'light');
  }, [theme]);

  return (
    <header>
      <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8">
        <div className="flex-1">
          <h1 className="text-lg font-bold mx-4">Search Countries</h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a onClick={toggle}>Toggle Theme</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
