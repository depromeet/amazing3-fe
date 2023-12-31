import TypeARoadSVG from '@/assets/icons/home/type-A-road.svg';
import TypeBRoadSVG from '@/assets/icons/home/type-B-road.svg';
import TypeEdgeRoadSVG from '@/assets/icons/home/type-edge-road.svg';
import type { GoalResponse } from '@/hooks/reactQuery/goal/useGetGoals';

import type { MapCardProps } from '../MapCardCollections';
import { EmptyMapCard, MapCard, StartMapCard } from '../MapCardCollections';

import { getEdgePosition, getEmptyGoalCount } from './MapCardPositioner.utils';

const typeToPosition = {
  A: [
    { x: 'top-[24px]', y: 'left-[42px]' },
    { x: 'top-[24px]', y: 'right-[32px]' },
    { x: 'top-[198px]', y: 'right-[80px]' },
    { x: 'top-[285px]', y: 'left-[32px]' },
    { x: 'top-[372px]', y: 'right-[32px]' },
  ] as MapCardProps['position'][],
  B: [
    { x: 'top-[372px]', y: 'left-[71px]' },
    { x: 'top-[285px]', y: 'right-[32px]' },
    { x: 'top-[198px]', y: 'left-[32px]' },
    { x: 'top-[24px]', y: 'left-[32px]' },
    { x: 'top-[24px]', y: 'right-[32px]' },
  ] as MapCardProps['position'][],
};

export interface MapCardPositionerProps {
  type: keyof typeof typeToPosition;
  goals: GoalResponse['goals'];
  isFirst?: boolean;
  isLast?: boolean;
}

export const MapCardPositioner = ({ goals, type, isFirst = false, isLast = false }: MapCardPositionerProps) => {
  const neededEmptyGoal = getEmptyGoalCount(goals, isFirst);

  return (
    <div className="h-[540px]">
      <div className="absolute inset-x-0">
        {/* 다음 페이지가 있는지/없는지에 따라 edge SVG 배치 */}
        {getEdgePosition({ type, isFirst, isLast }).map((position) => (
          <div key={position} className={`absolute ${position}`}>
            <TypeEdgeRoadSVG />
          </div>
        ))}
        {/* 타입에 따라 카드 뒤에 들어가는 길 모양 SVG 배치 */}
        <div className="absolute top-[89px] left-[96px]">
          {type === 'A' && <TypeARoadSVG />}
          {type === 'B' && <TypeBRoadSVG />}
        </div>

        {/* 맨 처음 페이지의 경우 START & 반디부디 보여주기 */}
        {type === 'A' && isFirst && <StartMapCard position={typeToPosition[type][0]} />}

        {/* 실제 목표들 */}
        {goals.map((goal, index) => (
          <MapCard key={goal.id} goal={goal} position={typeToPosition[type][isFirst ? index + 1 : index]} />
        ))}

        {/* 페이지에서 빈 부분 채우기 */}
        {Array.from({ length: neededEmptyGoal }, () => null).map((_, index) => (
          <EmptyMapCard
            key={index}
            alternativeTextIndex={(index % 4) as 0 | 1 | 2 | 3}
            position={typeToPosition[type][isFirst ? goals.length + index + 1 : goals.length + index]}
          />
        ))}
      </div>
    </div>
  );
};
