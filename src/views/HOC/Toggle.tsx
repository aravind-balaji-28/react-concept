import { useState } from 'react';
export interface ToggleInjectedProps {
  isOpen: boolean;
  toggle: () => void;
}
export function withToggle<P>(WrappedComponent: React.ComponentType<P & ToggleInjectedProps>) {
  const NewComponent: React.FC<P> = (props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen((prev) => !prev);
    const values = {
      ...props,
      isOpen,
      toggle,
    };
    return <WrappedComponent {...values} />;
  };
  return NewComponent;
}
