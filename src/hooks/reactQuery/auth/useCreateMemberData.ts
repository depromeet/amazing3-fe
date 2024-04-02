import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';

export interface MemberRequest {
  nickname: string;
  birth?: string;
}

export const useCreateMemberData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: MemberRequest) => api.put('/my', data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['memberData'] }),
  });
};
