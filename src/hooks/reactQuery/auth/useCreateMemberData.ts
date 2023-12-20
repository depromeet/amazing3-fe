import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';
import type { NewMemberFormValues as MemberRequest } from '@/features/member/types';

export const useCreateMemberData = () => {
  return useMutation({
    mutationFn: (data: MemberRequest) => api.put('/my', data),
  });
};
