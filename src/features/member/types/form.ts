export interface NewMemberFormValues {
  nickname: string;
  birth: string;
}

export interface MemberProps {
  id: number;
  email: string;
  username: string;
  nickname: string;
  birth: string;
  image: string;
  createdAt: string;
  lifeMap: { isPublic: boolean };
  goal: { count: number };
}

/*
  {
    "id": 4,
    "email": "amazingdpm@gmail.com",
    "username": "BANDIBOODI-4",
    "nickname": "김도무룩",
    "birth": "2024-01-11",
    "image": "https://lh3.googleusercontent.com/a/ACg8ocKNpvNZtTxiKysd68nIjE3KCgp5d_h979LBglkTJsuP=s96-c",
    "createdAt": "2024-01-11T00:23:34",
    "lifeMap": {
        "isPublic": true
    },
    "goal": {
        "count": 20
    }
  }
  */
