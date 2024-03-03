import Link from 'next/link';

import AppleIcon from '@/assets/icons/auth/apple.svg';
import GoogleIcon from '@/assets/icons/auth/google.svg';
import KakaoIcon from '@/assets/icons/auth/kakao.svg';
import NaverIcon from '@/assets/icons/auth/naver.svg';

interface LoginIconSetProps {
  google?: boolean;
  naver?: boolean;
  kakao?: boolean;
  apple?: boolean;
}

const loginPath = {
  google: `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/google`,
  naver: `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/naver`,
  kakao: `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/kakao`,
  apple: `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/apple`,
};

export const LoginIconSet = ({ google = false, naver = false, kakao = false, apple = false }: LoginIconSetProps) => {
  return (
    <div className="w-fit flex justify-between items-center gap-[24px]">
      {google && (
        <Link href={{ pathname: loginPath.google }}>
          <GoogleIcon />
        </Link>
      )}
      {naver && (
        <Link href={{ pathname: loginPath.naver }}>
          <NaverIcon />
        </Link>
      )}
      {kakao && (
        <Link href={{ pathname: loginPath.kakao }}>
          <KakaoIcon />
        </Link>
      )}
      {apple && (
        <Link href={{ pathname: loginPath.apple }}>
          <AppleIcon />
        </Link>
      )}
    </div>
  );
};
