'use client';

import { useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';

import SuccessIcon from '@/assets/icons/toast-success.svg';
import WarningIcon from '@/assets/icons/toast-warning.svg';

import { Typography } from '../typography';

import { removeToastAtom } from './Toast.atom';

export interface ToastProps {
  id: string;
  title: string;
  type?: 'success' | 'warning';
}

const toastIcon = {
  success: <SuccessIcon />,
  warning: <WarningIcon />,
};

const TOAST_DURATION = 2000;
const ANIMATION_DURATION = 200;

export const Toast = ({ id, title, type = 'success' }: ToastProps) => {
  const [opacity, setOpacity] = useState('opacity-[0.2]');
  const removeToastItem = useSetAtom(removeToastAtom);

  useEffect(() => {
    setOpacity('opacity-[0.8]');
    const timeoutForRemove = setTimeout(() => {
      removeToastItem(id);
    }, TOAST_DURATION);

    const timeoutForVisible = setTimeout(() => {
      setOpacity('opacity-0');
    }, TOAST_DURATION - ANIMATION_DURATION);

    return () => {
      clearTimeout(timeoutForRemove);
      clearTimeout(timeoutForVisible);
    };
  }, [id, removeToastItem]);

  return (
    <div
      className={`w-fit flex gap-5xs justify-center items-center px-3xs py-5xs bg-gray-60 rounded-[12px] mb-5xs transition-all duration-350 ease-in-out ${opacity}`}
    >
      {toastIcon[type]}
      <Typography type="body3" className="text-white">
        {title}
      </Typography>
    </div>
  );
};
