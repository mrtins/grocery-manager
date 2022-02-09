import React, { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

const Button = ({ onClick, children }: ButtonProps) => (
  <button
    onClick={onClick}
    className="bg-blue-500 hover:bg-blue-600 rounded-full p-3 text-white mx-auto mt-6 w-36 flex justify-evenly items-center drop-shadow-md"
  >
    {children}
  </button>
);

export default Button;
