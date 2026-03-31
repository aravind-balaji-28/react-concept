import { createContext } from 'react';

interface IStateContextType {
  count: number;
  text: string;
}

export const StateContext = createContext<IStateContextType | null>(null);

export type ActionType = {
  increment: () => void;
  decrement: () => void;
  generateQuotes: () => void;
  resetQuotes: () => void;
};

export const ActionContext = createContext<ActionType | null>(null);
