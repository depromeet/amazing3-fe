import { type RefObject } from 'react';
import { toJpeg } from 'html-to-image';

import { backgroundImage } from '../../../../styles/theme';

const downloadFile = (url: string, filename: string) => {
  const link = document.createElement('a');

  link.download = filename;
  link.href = url;

  link.click();
};

export const downloadImage = async (imageRef: RefObject<HTMLElement>) => {
  const image = imageRef.current;

  if (!image) return;

  try {
    const imageUrl = await toJpeg(image, {
      includeQueryParams: true,
      style: {
        backgroundImage: backgroundImage.gradient1,
        paddingTop: '24px',
        paddingBottom: '24px',
      },
    });

    // FIXME: 다운로드 되는 이미지 파일 이름 수정 필요
    const IMAGE_FILE_NAME = 'file-name-test';
    downloadFile(imageUrl, IMAGE_FILE_NAME);
  } catch (error) {
    // TODO: 이미지 다운로드 실패 시, 추가 에러 처리 필요
    console.error(error);
  }
};
