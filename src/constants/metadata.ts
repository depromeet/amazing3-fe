export const META = {
  title: '반디부디: 별이 되고 싶은 반디부디의 인생지도',
  siteName: '반디부디',
  description:
    '이루고 싶은 목표를 지도에 남겨보세요. 목표와 관련된 다양한 스티커를 붙여 나만의 지도를 만들고 공유할 수 있어요.',
  keyword: [
    '반디부디',
    'bandiboodi',
    '인생지도',
    '신년계획',
    '계획',
    '목표설정',
    '목표달성',
    '자기계발',
    '회고',
    '응원',
  ],
  url: 'https://www.bandiboodi.com',
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  ogImage: '/opengraph-image.png',
} as const;

export const META_ONBOARDING = {
  title: '반디부디: 내가 직접 그리는 나의 인생지도',
  description:
    '내가 걸어온 길을 떠올리면서 회고를 적고, 내가 걸어갈 길의 방향을 짚어가면서 목표와 계획을 세워보세요. 한 조각씩 채우다 보면 나만의 인생지도가 완성될 거에요.',
  url: 'https://www.bandiboodi.com/onboarding',
} as const;
