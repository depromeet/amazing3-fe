import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

export type CheeringCountRequest = {
  username: string;
};

export type CheeringCountResponse = {
  count: number;
};

export const useGetCheeringCount = ({ username }: CheeringCountRequest) => {
  return useQuery<CheeringCountResponse>({
    queryKey: ['cheering', username],
    queryFn: () => api.get<CheeringCountResponse>(`/cheering/count/${username}`),
  });
};
