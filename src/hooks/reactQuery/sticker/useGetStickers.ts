import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

type StickerResponse = Array<{
  id: number;
  name: string;
  url: string;
}>;

export const useGetStickers = () => {
  return useQuery<StickerResponse>({
    queryKey: ['stickers'],
    queryFn: () => api.get<StickerResponse>('/sticker'),
  });
};
