import { type RefObject, useState } from 'react';
import { domToJpeg } from 'modern-screenshot';

import { shareImage } from '@/utils/image';
import { isIos } from '@/utils/userAgent';

import { backgroundImage } from '../../styles/theme';

const downloadFile = (url: string, filename: string) => {
  const link = document.createElement('a');

  link.download = filename;
  link.href = url;

  link.click();
};

export const useDownloadImage = (imageRef: RefObject<HTMLElement>) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const onDownloadImage = async () => {
    const image = imageRef.current;

    if (!image) return;
    setIsDownloading(true);

    const imageUrl = await domToJpeg(image, {
      style: {
        backgroundImage: backgroundImage.gradient1,
        paddingTop: '24px',
      },
      height: 700,
      scale: 4,
      timeout: 60000,
    });

    const IMAGE_FILE_NAME = '별이되고_싶은_반디부디의_인생지도';
    if (isIos()) shareImage(imageUrl, IMAGE_FILE_NAME);
    else downloadFile(imageUrl, IMAGE_FILE_NAME);

    setIsDownloading(false);
  };

  return {
    isDownloading,
    onDownloadImage,
  };
};
