import React from 'react';
import Link from 'next/link';
import { useOverlay } from '@toss/use-overlay';

import CloseIcon from '@/assets/icons/goal/close-icon.svg';
import DeleteIcon from '@/assets/icons/goal/delete-icon.svg';

import { DeleteGoalButtomSheet } from './DeleteGoalButtomSheet';

interface DetailHeaderProps {
  goalId: number;
}

export const DetailHeader = ({ goalId }: DetailHeaderProps) => {
  const overlay = useOverlay();

  return (
    <>
      <Link href={{ pathname: '/home' }}>
        <CloseIcon />
      </Link>

      {goalId && (
        <button
          onClick={() => {
            overlay.open(({ isOpen, close }) => {
              return <DeleteGoalButtomSheet open={isOpen} onClose={close} goalId={goalId} />;
            });
          }}
        >
          <DeleteIcon />
        </button>
      )}
    </>
  );
};
