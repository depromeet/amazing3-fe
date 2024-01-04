type shareLinkParams = ShareData & Pick<Required<ShareData>, 'url'>;

const copyClipboard = async ({ url }: shareLinkParams) => {
  try {
    await navigator.clipboard.writeText(url);
    alert('클립보드에 링크가 복사되었습니다.');
  } catch (error) {
    alert('복사에 실패하였습니다');
  }
};

export const shareLink = async ({ url, ...params }: shareLinkParams) => {
  if (!navigator.canShare) {
    copyClipboard({ url });
    return;
  }

  await navigator.share({ url, ...params });
};
