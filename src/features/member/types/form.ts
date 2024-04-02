export interface NewMemberFormValues {
  nickname: string;
  birth?: string;
}

export interface MemberProps {
  id: number;
  email: string;
  username: string;
  nickname: string;
  birth?: string;
  image: string;
  createdAt: string;
  lifeMap: { isPublic: boolean; goalsCount: number; lifeMapId: number };
}
