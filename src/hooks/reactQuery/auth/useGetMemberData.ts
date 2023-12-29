import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';
import type { MemberProps } from '@/features/member/types';

interface UseGetMemberDataProps {
  enabled?: boolean;
}

export const useGetMemberData = ({ enabled = true }: UseGetMemberDataProps = {}) => {
  return useQuery<MemberProps>({
    queryKey: ['memberData'],
    queryFn: () => api.get<MemberProps>('/my'),
    enabled,
  });
};
