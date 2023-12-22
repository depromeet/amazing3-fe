import React from 'react';
import Link from 'next/link';
import { useOverlay } from '@toss/use-overlay';
import { useAtomValue } from 'jotai';

import CloseIcon from '@/assets/icons/goal/close-icon.svg';
import DeleteIcon from '@/assets/icons/goal/delete-icon.svg';

import { goalIdAtom } from './atom';
import { DeleteGoalButtomSheet } from './DeleteGoalButtomSheet';

export const DetailHeader = () => {
  const goalId = useAtomValue(goalIdAtom);
  const overlay = useOverlay();

  return (
    <>
      <Link href={{ pathname: '/home' }}>
        <CloseIcon />
      </Link>

      {goalId && (
        <button
          disabled={!goalId}
          onClick={() => {
            overlay.open(({ isOpen, close }) => {
              return <DeleteGoalButtomSheet open={isOpen} onClose={close} />;
            });
          }}
        >
          <DeleteIcon />
        </button>
      )}
    </>
  );
};
