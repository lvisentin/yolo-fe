import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../../context/provider/ThemeProvider';
import ToggleThemeButton from '../../atoms/ToggleThemeButton/ToggleThemeButton';
import HeaderLogo from '../../atoms/HeaderLogo/HeaderLogo';

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
      <nav className="navbar bg-base-100 shadow-lg px-4 sm:px-8">
        <div className="flex-1">
          <HeaderLogo />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ToggleThemeButton onClick={toggle}>{theme.toUpperCase()}</ToggleThemeButton>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
