import type { ButtonHTMLAttributes } from 'react';

import DownloadIcon from '@/assets/icons/download.svg';
import { Spinner } from '@/components/atoms/spinner';

/**
 * TODO 1: 디자인 시스템 반영된 Button으로 대체하기
 * TODO 2: 클릭 이벤트 연결하기
 */

interface ShareButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
}

export const ShareButton = ({ isLoading, ...props }: ShareButtonProps) => {
  return (
    <button className="w-[60px] h-[60px] p-2xs flex justify-center items-center bg-blue-10 rounded-lg" {...props}>
      {isLoading ? <Spinner /> : <DownloadIcon />}
    </button>
  );
};
