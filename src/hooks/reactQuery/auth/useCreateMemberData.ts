import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';
import type { NewMemberFormValues as MemberRequest } from '@/features/member/types';

export const useCreateMemberData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: MemberRequest) => api.put('/my', data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['memberData'] }),
  });
};
