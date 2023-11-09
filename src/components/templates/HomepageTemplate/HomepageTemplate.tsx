import { ReactElement } from 'react';

export interface HomepageProps {
  children: ReactElement;
}

export function HomepageTemplate({ children }: HomepageProps) {
  return <div>{children}</div>;
}
