import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';
import type { MemberProps } from '@/features/member/types';

export const useGetMemberData = () => {
  return useQuery<MemberProps>({
    queryKey: ['memberData'],
    queryFn: () => api.get<MemberProps>('/my'),
  });
};
