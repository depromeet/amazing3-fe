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

export const downloadFile = (url: string, filename: string) => {
  const link = document.createElement('a');

  link.download = filename;
  link.href = url;

  link.click();
};
