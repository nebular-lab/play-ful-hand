import { ReactNode, type FC } from 'react';

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = (props) => {
  const { children, onClick } = props;
  return (
    <button
      className=" rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
