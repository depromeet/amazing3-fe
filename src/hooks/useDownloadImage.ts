import { type RefObject, useState } from 'react';
import { toJpeg } from 'html-to-image';

import { shareImage } from '@/utils/image';
import { isIos } from '@/utils/userAgent';

import { backgroundImage } from '../../styles/theme';

import { useIsMounted } from './useIsMounted';

const downloadFile = (url: string, filename: string) => {
  const link = document.createElement('a');

  link.download = filename;
  link.href = url;

  link.click();
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useDownloadImage = (imageRef: RefObject<HTMLElement>) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const isMounted = useIsMounted();

  const onDownloadImage = async () => {
    const image = imageRef.current;

    if (!image || !isMounted) return;

    try {
      setIsDownloading(true);

      const imageUrl = await toJpeg(image, {
        includeQueryParams: true,
        style: {
          backgroundImage: backgroundImage.gradient1,
        },
        height: 700,
        cacheBust: true,
      });

      await sleep(5000);

      const IMAGE_FILE_NAME = '별이되고_싶은_반디부디의_인생지도';

      if (isIos()) {
        shareImage(imageUrl, IMAGE_FILE_NAME);
      } else {
        downloadFile(imageUrl, IMAGE_FILE_NAME);
      }
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
