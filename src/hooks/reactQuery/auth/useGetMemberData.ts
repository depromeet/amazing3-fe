import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';
import type { MemberProps } from '@/features/member/types';
import { useAuth } from '@/hooks';

export const useGetMemberData = () => {
  const { isLoggedIn } = useAuth();

  return useQuery<MemberProps>({
    queryKey: ['memberData'],
    queryFn: () => api.get<MemberProps>('/my'),
    enabled: isLoggedIn,
  });
};
