import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';

export const useDeleteMemberData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => api.delete('/my'),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['memberData'] }),
  });
};
