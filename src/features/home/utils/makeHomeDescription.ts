export const makeHomeDescription = (goalLength: number) => {
  if (!goalLength) return '인생 지도의 한 조각을 선택해 목표를 남겨보세요';

  return `${goalLength}조각의 목표가 생겼어요`;
};
