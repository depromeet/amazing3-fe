import { domToJpeg } from 'modern-screenshot';

import { DOWNLOAD_IMAGE_STYLE } from '@/constants/image';

import { backgroundImage } from '../../styles/theme';

export const shareImage = async (imageUrl: string, fileName: string) => {
  // TODO: 추후에 에러 처리 변경
  if (!navigator.canShare) {
    alert('지원하지 않는 브라우저입니다.');
    return;
  }

  const image = await fetch(imageUrl);
  const blob = await image.blob();
  const file = new File([blob], `${fileName}.jpeg`, {
    type: 'image/jpeg',
  });
  const shareData = {
    title: fileName,
    text: fileName,
    files: [file],
  };

  // TODO: 추후에 에러 처리 변경
  if (!navigator.canShare({ files: [file] })) {
    alert('공유할 수 없는 파일입니다');
    return;
  }

  await navigator.share(shareData);
};

export const getImageUrl = async (image: HTMLElement, currentPage: number) => {
  const { WIDTH, HEIGHT, PADDING } = DOWNLOAD_IMAGE_STYLE;

  const imageUrl = await domToJpeg(image, {
    style: {
      backgroundImage: backgroundImage.gradient1,
      paddingTop: `${PADDING}px`,
    },
    height: HEIGHT,
    scale: 4,
    onCloneNode: (node) => {
      const swiperWrapper = (node as HTMLElement).querySelector<HTMLElement>('.swiper-wrapper');
      const swiperPagination = (node as HTMLElement).querySelector<HTMLElement>('.swiper-pagination');

      if (!swiperWrapper || !swiperPagination) return;

      swiperPagination.style.display = 'none';
      swiperWrapper.style.transform = `translate3d(-${currentPage * WIDTH}px, 0, 0)`;
    },
  });

  return imageUrl;
};
