import Link from 'next/link';

import GoogleIcon from '@/assets/icons/google.svg';
import KakaoIcon from '@/assets/icons/kakao.svg';
import NaverIcon from '@/assets/icons/naver.svg';

interface LoginIconSetProps {
  google?: boolean;
  naver?: boolean;
  kakao?: boolean;
}

const loginPath = {
  google: `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/google`,
  naver: `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/naver`,
  kakao: '', // TODO: 개발 후 추가
};

export const LoginIconSet = ({ google = false, naver = false, kakao = false }: LoginIconSetProps) => {
  return (
    <div className="w-full flex justify-between items-center">
      {kakao && (
        <Link href={{ pathname: loginPath.kakao }}>
          <KakaoIcon />
        </Link>
      )}
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
    </div>
  );
};
