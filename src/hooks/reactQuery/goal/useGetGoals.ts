import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';

import { api } from '@/apis';
import { isLoginAtom } from '@/features/auth/atom';

export type GoalProps = {
  id: number;
  deadline: string;
  stickerUrl: string;
  tagContent: string;
};

export type GoalResponse = {
  isPublic: boolean;
  goals: Array<GoalProps>;
  goalsCount: number;
};

export const useGetGoals = () => {
  const isLogin = useAtomValue(isLoginAtom);

  return useQuery<GoalResponse>({
    queryKey: ['goals'],
    queryFn: () => api.get<GoalResponse>('/life-map'),
    enabled: isLogin,
  });
};
