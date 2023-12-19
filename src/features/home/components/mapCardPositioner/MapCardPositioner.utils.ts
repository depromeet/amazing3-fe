import { GOAL_COUNT_PER_PAGE } from '../../constants';

import type { MapCardPositionerProps } from './MapCardPositioner';

interface getTypeAndIsEdgeToSVGPositionProps {
  type: MapCardPositionerProps['type'];
  isLast?: boolean;
}

const position = {
  topLeft: 'top-[89px] left-0',
  topRight: 'top-[89px] right-0',
  bottomLeft: 'top-[437px] left-0',
  bottomRight: 'top-[437px] right-0',
};

/**
 * type과 isLast(마지막 페이지인가)를 인자로 받아 edge svg의 위치를 반환하는 메서드
 */
export const getEdgePosition = ({ type, isLast = false }: getTypeAndIsEdgeToSVGPositionProps) => {
  switch (type) {
    case 'A':
      if (!isLast) {
        // 다음 페이지가 존재한다면
        // 양끝 edge의 position을 함께
        return [position.topLeft, position.bottomRight];
      }
      return [position.topLeft];
    case 'B':
      if (!isLast) {
        return [position.bottomLeft, position.topRight];
      }
      return [position.bottomLeft];
  }
};

/**
 * array를 splitNum 단위로 나누어 배열에 다시 담아 반환해주는 메서드
 */
export const partitionArrayWithSmallerFirstGroup = <T>(array: T[], splitNum: number): T[][] => {
  const result: T[][] = [];

  // 첫 번째 분할 작업에서는 splitNum에서 1을 뺀 값을 사용
  result.push(array.slice(0, splitNum - 1));

  for (let i = splitNum - 1; i < array.length; i += splitNum) {
    result.push(array.slice(i, i + splitNum));
  }

  return result;
};

/**
 * 배열과 길이를 인자로 받으면, 더 채워져야 하는 요소의 갯수를 반환해주는 메서드
 */
export const getEmptyGoalCount = <T>(array: T[], isFirst?: boolean) => {
  const needed = GOAL_COUNT_PER_PAGE - array.length;

  if (isFirst) return needed - 1; // 첫 페이지의 경우 START 이미지를 제외해야 합니다.

  return needed > 0 ? needed : 0;
};
