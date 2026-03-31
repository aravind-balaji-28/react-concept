import { useContext } from 'react';
import { StateContext, ActionContext } from './context';

export const useCount = () => {
  const ctx = useContext(StateContext);
  if (!ctx) throw new Error('useActions must be used inside provider');
  return ctx;
};

export const useActions = () => {
  const ctx = useContext(ActionContext);
  if (!ctx) throw new Error('useActions must be used inside provider');
  return ctx;
};
