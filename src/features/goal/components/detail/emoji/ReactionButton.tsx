import type { ButtonHTMLAttributes } from 'react';

import PlusIcon from '@/assets/icons/react-emoji-plus-icon.svg';

interface ReactionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

export const ReactionButton = ({ isOpen, ...props }: ReactionButtonProps) => {
  return (
    <button
      className="w-fit h-fit rounded-full transition duration-300 hover:shadow-thumb hover:scale-105 transform"
      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
      {...props}
    >
      <PlusIcon />
    </button>
  );
};
