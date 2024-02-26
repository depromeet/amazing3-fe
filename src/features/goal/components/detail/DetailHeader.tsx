import React from 'react';
import Link from 'next/link';
import { useOverlay } from '@toss/use-overlay';

import CloseIcon from '@/assets/icons/goal/close-icon.svg';
import DeleteIcon from '@/assets/icons/goal/delete-icon.svg';
import EditIcon from '@/assets/icons/goal/edit-icon.svg';
import { useIsMyMap } from '@/hooks';

import { DeleteGoalBottomSheet } from './DeleteGoalBottomSheet';

interface DetailHeaderProps {
  goalId: number;
}

export const DetailHeader = ({ goalId }: DetailHeaderProps) => {
  const overlay = useOverlay();
  const { isMyMap, currentUsername } = useIsMyMap();

  return (
    <>
      <Link href={{ pathname: `/home/${currentUsername}`, query: { id: goalId } }}>
        <CloseIcon />
      </Link>

      <Link href={{ pathname: `/goal/update`, query: { id: goalId } }}>
        <EditIcon />
      </Link>
      {isMyMap && goalId && (
        <button
          onClick={() => {
            overlay.open(({ isOpen, close }) => {
              return <DeleteGoalBottomSheet open={isOpen} onClose={close} goalId={goalId} />;
            });
          }}
        >
          <DeleteIcon />
        </button>
      )}
    </>
  );
};
