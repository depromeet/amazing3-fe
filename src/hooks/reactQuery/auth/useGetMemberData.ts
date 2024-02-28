import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';

import { api } from '@/apis';
import { isLoginAtom } from '@/features/auth/atom';
import type { MemberProps } from '@/features/member/types';

export const useGetMemberData = () => {
  const isLogin = useAtomValue(isLoginAtom);

  return useQuery<MemberProps>({
    queryKey: ['memberData'],
    queryFn: () => api.get<MemberProps>('/my'),
    enabled: isLogin,
  });
};
