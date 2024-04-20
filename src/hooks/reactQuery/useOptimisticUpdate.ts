import type { QueryKey } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

export const useOptimisticUpdate = () => {
  const queryClient = useQueryClient();

  const optimisticUpdater = async <T>({
    queryKey,
    updater,
  }: {
    queryKey: QueryKey;
    updater: (old: T) => T | unknown;
  }) => {
    await queryClient.cancelQueries({ queryKey });
    const previous = queryClient.getQueryData(queryKey);

    queryClient.setQueryData(queryKey, updater);

    return { previous };
  };

  return { queryClient, optimisticUpdater };
};
