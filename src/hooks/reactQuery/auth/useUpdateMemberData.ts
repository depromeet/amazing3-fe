import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';
import { useToast } from '@/hooks/useToast';

export interface UpdateMemberRequest {
  nickname: string;
  birth: string;
  username: string;
  image: string;
}

interface ResponseError extends Error {
  status?: number;
}

export const useUpdateMemberData = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: (data: UpdateMemberRequest) => api.put('/users', data),
    onSuccess: (data) => {
      localStorage.setItem('username', data.username);
      queryClient.invalidateQueries({ queryKey: ['memberData'] });
    },
    onError: (error: ResponseError) => {
      const errorMessage = error.status === 409 ? '이미 존재하는 아이디에요.' : '다시 시도해주세요.';
      toast.warning(`회원정보 수정에 실패했어요. ${errorMessage}`);
    },
  });
};
