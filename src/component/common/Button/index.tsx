import { ReactNode, type FC } from 'react';

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = (props) => {
  const { children, onClick } = props;
  return (
    <button
      onClick={onClick}
    >
      {children}
    </button>
  );
};
