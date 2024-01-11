import Link from 'next/link';

import GoogleIcon from '@/assets/icons/auth/google.svg';
import KakaoIcon from '@/assets/icons/auth/kakao.svg';
import NaverIcon from '@/assets/icons/auth/naver.svg';

interface LoginIconSetProps {
  google?: boolean;
  naver?: boolean;
  kakao?: boolean;
}

const loginPath = {
  google: `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/google`,
  naver: `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/naver`,
  kakao: `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/kakao`,
};

export const LoginIconSet = ({ google = false, naver = false, kakao = false }: LoginIconSetProps) => {
  return (
    <div className="w-fit flex justify-between items-center">
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
    </div>
  );
};
