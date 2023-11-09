import React, { ReactElement, SyntheticEvent } from 'react';

interface ToggleThemeButtonProps {
  onClick: (e: SyntheticEvent) => void;
  children: ReactElement;
}

function ToggleThemeButton({ onClick, children }: ToggleThemeButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

export default ToggleThemeButton;
