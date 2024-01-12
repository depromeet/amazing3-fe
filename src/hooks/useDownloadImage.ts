import { type RefObject, useState } from 'react';
import { domToJpeg } from 'modern-screenshot';

import { GOAL_COUNT_PER_PAGE } from '@/features/home/constants';
import { downloadFile, shareImage } from '@/utils/image';
import { isIos } from '@/utils/userAgent';

import { backgroundImage } from '../../styles/theme';

import { useGetGoals } from './reactQuery/goal';

interface DownloadImageOption {
  type: 'ALL' | 'CURRENT';
  imageRef: RefObject<HTMLElement>;
}

const defaultDownloadOption = {
  style: {
    backgroundImage: backgroundImage.gradient1,
    paddingTop: '24px',
  },
  scale: 4,
};

export const useDownloadImage = ({ type, imageRef }: DownloadImageOption) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const { data: goalsData } = useGetGoals();

  const getPageCount = () => Math.floor((goalsData?.goalsCount || 1) / GOAL_COUNT_PER_PAGE) + 1;

  const allPageDownloadOption = {
    height: 670,
    width: 390 * getPageCount(),
    onCloneNode: (node: Node) => {
      const swiper = (node as HTMLElement).querySelector<HTMLElement>('.swiper');
      const swiperWrapper = (node as HTMLElement).querySelector<HTMLElement>('.swiper-wrapper');

      if (!swiper || !swiperWrapper) return;

      swiper.style.overflow = 'visible';
      swiperWrapper.style.transform = 'translate3d(0px, 0, 0)';
    },
    ...defaultDownloadOption,
  };

  const onePageDownloadOption = {
    height: 700,
    ...defaultDownloadOption,
  };

  const onDownloadImage = async () => {
    const image = imageRef.current;

    if (!image) return;

    try {
      setIsDownloading(true);

      const imageOption = type === 'ALL' ? allPageDownloadOption : onePageDownloadOption;
      const imageUrl = await domToJpeg(image, imageOption);

      const IMAGE_FILE_NAME = '별이되고_싶은_반디부디의_인생지도';
      if (isIos()) shareImage(imageUrl, IMAGE_FILE_NAME);
      else downloadFile(imageUrl, IMAGE_FILE_NAME);
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
