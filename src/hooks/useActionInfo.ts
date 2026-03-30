import { useCallback, useState } from 'react';

export interface IActionState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useActionInfo = (): IActionState => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return {
    count,
    increment,
    decrement,
  };
};
