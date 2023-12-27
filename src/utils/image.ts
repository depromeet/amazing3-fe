export const shareImage = async (imageUrl: string, fileName: string) => {
  if (!navigator.canShare) {
    alert('지원하지 않는 브라우저입니다.');
    return;
  }

  const image = await fetch(imageUrl);
  const blob = await image.blob();
  const file = new File([blob], `${fileName}.png`, {
    type: 'image/png',
  });
  const shareData = {
    title: fileName,
    text: fileName,
    files: [file],
  };

  if (!navigator.canShare({ files: [file] })) {
    alert('공유할 수 없는 파일입니다');
    return;
  }

  await navigator.share(shareData);
};
