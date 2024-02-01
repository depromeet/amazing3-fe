import { useIsMounted } from '@/hooks';

export const useStorage = (key: string) => {
  const isMounted = useIsMounted();

  if (!isMounted) return;

  return localStorage.getItem(key);
};
