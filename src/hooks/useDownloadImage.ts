import { type RefObject, useState } from 'react';

import { GOAL_COUNT_PER_PAGE } from '@/features/home/constants';
import { useGetGoals } from '@/hooks/reactQuery/goal';
import { getImageUrl, shareImage } from '@/utils/image';
import { isIos } from '@/utils/userAgent';

const downloadFile = (url: string, filename: string) => {
  const link = document.createElement('a');

  link.download = filename;
  link.href = url;

  link.click();
};

export const useDownloadImage = (imageRef: RefObject<HTMLElement>) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const { data: goalsData } = useGetGoals();

  const TOTAL_GOAL_PAGES = Math.floor((goalsData?.goalsCount || 1) / GOAL_COUNT_PER_PAGE) + 1;

  const onDownloadImage = async () => {
    const image = imageRef.current;

    if (!image) return;

    try {
      setIsDownloading(true);

      Array.from({ length: TOTAL_GOAL_PAGES }).forEach(async (_, currentPage) => {
        const imageUrl = await getImageUrl(image, currentPage);

        const IMAGE_FILE_NAME = `별이되고_싶은_반디부디의_인생지도_${currentPage}`;

        if (isIos()) shareImage(imageUrl, IMAGE_FILE_NAME);
        else downloadFile(imageUrl, IMAGE_FILE_NAME);
      });
    } catch (error) {
      // TODO: 이미지 다운로드 실패 시, 추가 에러 처리 필요
      console.error(error);
    } finally {
      setIsDownloading(false);
    }
  };

  return {
    isDownloading,
    onDownloadImage,
  };
};
