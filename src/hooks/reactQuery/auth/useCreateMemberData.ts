import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';
import type { MemberProps } from '@/features/member/types';

type MemberRequest = Pick<MemberProps, 'nickname' | 'birth'>;

export const useCreateMemberData = () => {
  return useMutation({
    mutationFn: (data: MemberRequest) => api.put('/my', data),
  });
};
