import { useState } from 'react';

interface ToggleProps {
  initial?: boolean;
}
export const useToggle = ({ initial = false }: ToggleProps = {}): [boolean, () => void] => {
  const [isOpen, setIsOpen] = useState<boolean>(initial);
  const toggle = () => setIsOpen((prev) => !prev);
  console.log(isOpen, 'isOpen 0');

  return [isOpen, toggle];
};
