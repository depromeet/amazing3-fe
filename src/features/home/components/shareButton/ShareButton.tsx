import ShareIcon from '@/assets/icons/share.svg';

/**
 * TODO 1: 디자인 시스템 반영된 Button으로 대체하기
 * TODO 2: 클릭 이벤트 연결하기
 */
export const ShareButton = () => {
  return (
    <button className="w-[60px] h-[60px] flex justify-center items-center bg-blue-10 rounded-lg">
      <ShareIcon />
    </button>
  );
};
