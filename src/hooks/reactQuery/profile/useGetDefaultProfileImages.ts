import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

type ProfileImagesResponse = Array<{
  id: number;
  name: string;
  url: string;
}>;

export const useGetDefaultProfileImages = () => {
  return useQuery<ProfileImagesResponse>({
    queryKey: ['profileImages'],
    queryFn: () => api.get<ProfileImagesResponse>('/profile/default'),
  });
};
