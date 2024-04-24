import React, { useEffect } from 'react';
import type { Route } from 'next';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useOverlay } from '@toss/use-overlay';

import EditIcon from '@/assets/icons/edit-icon.svg';
import CloseIcon from '@/assets/icons/goal/close-icon.svg';
import DeleteIcon from '@/assets/icons/goal/delete-icon.svg';
import { useIsMyMap } from '@/hooks';

import { DeleteGoalBottomSheet } from './DeleteGoalBottomSheet';

interface DetailHeaderProps {
  goalId: number;
}

export const DetailHeader = ({ goalId }: DetailHeaderProps) => {
  const overlay = useOverlay();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isMyMap, currentUsername } = useIsMyMap();

  useEffect(() => {
    const handleBackEvent = (event: PopStateEvent) => {
      event.preventDefault();
      const previousPath = searchParams.get('previous') as Route;
      if (previousPath) {
        router.push(`${previousPath}?id=${goalId}`);
      } else {
        router.push(`/home/${currentUsername}?id=${goalId}`);
      }
    };
    window.addEventListener('popstate', handleBackEvent);
    return () => {
      window.removeEventListener('popstate', handleBackEvent);
    };
  }, [currentUsername, goalId, router, searchParams]);

  return (
    <>
      <button>
        <CloseIcon onClick={() => router.back()} />
      </button>
      {isMyMap && goalId && (
        <div className="flex space-x-4">
          <Link href={{ pathname: `/goal/update/${goalId}` }}>
            <EditIcon />
          </Link>
          <button
            onClick={() => {
              overlay.open(({ isOpen, close }) => {
                return <DeleteGoalBottomSheet open={isOpen} onClose={close} goalId={goalId} />;
              });
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      )}
    </>
  );
};
