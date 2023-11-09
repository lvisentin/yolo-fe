import { useEffect, useState } from 'react';

export function useDebounce(value: any, delay: number) {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    const func = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return () => {
      clearTimeout(func);
    };
  }, [value, delay]);

  return delayedValue;
}
