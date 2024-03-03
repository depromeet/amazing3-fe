import type { ButtonHTMLAttributes } from 'react';

import PlusIcon from '@/assets/icons/react-emoji-plus-icon.svg';

interface ReactionAddButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

export const ReactionAddButton = ({ isOpen, ...props }: ReactionAddButtonProps) => {
  return (
    <button
      className={`w-fit h-fit rounded-full transition duration-300 hover:shadow-thumb hover:scale-105 transform ${
        isOpen ? 'rotate-45' : 'rotate-0'
      }`}
      {...props}
    >
      <PlusIcon />
    </button>
  );
};
