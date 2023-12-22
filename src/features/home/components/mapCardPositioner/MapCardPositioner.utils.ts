import { GOAL_COUNT_PER_PAGE } from '../../constants';

import type { MapCardPositionerProps } from './MapCardPositioner';

interface getTypeAndIsEdgeToSVGPositionProps {
  type: MapCardPositionerProps['type'];
  isFirst?: boolean;
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
export const getEdgePosition = ({ type, isFirst = false, isLast = false }: getTypeAndIsEdgeToSVGPositionProps) => {
  const positions = [];

  switch (type) {
    case 'A':
      if (isFirst) {
        // 시작 페이지라면
        if (!isLast) {
          // 시작 페이지인데 다음 페이지가 있다면
          positions.push(position.bottomRight);
        }
      } else {
        // 시작 페이지가 아니라면
        positions.push(position.topLeft);
        if (!isLast) {
          // 근데 다음 페이지가 있다면
          positions.push(position.bottomRight);
        }
      }
      break;
    case 'B':
      // Type B는 2페이지부터 시작이므로 기본으로 왼쪽 아래 edge가 존재
      positions.push(position.bottomLeft);
      if (!isLast) {
        // 다음 페이지가 존재한다면 오른쪽 위 edge 필요
        positions.push(position.topRight);
      }
      break;
  }
  return positions;
};

/**
 * array를 splitNum 단위로 나누어 배열에 다시 담아 반환해주는 메서드
 */
export const partitionArrayWithSmallerFirstGroup = <T>(splitNum: number, array?: T[]): T[][] => {
  const result: T[][] = [];

  if (!array) return [];

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
