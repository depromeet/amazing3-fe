import Link from 'next/link';

import { Typography } from '@/components';
import { GoogleLoginButton } from '@/features/auth/components';

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-2xs justify-center items-center bg-gradient1">
      <Typography className="bg-clip-text bg-gradient4 text-transparent text-center" type="heading1">
        내가 직접 그리는 <br /> 나의 인생지도
      </Typography>
      <div className="w-[300px] h-[250px] flex justify-center items-center bg-white">
        <span>logo</span>
      </div>
      <GoogleLoginButton />
      <Typography className="text-center text-gray-40" type="body3">
        회원가입 시{' '}
        <Link className=" underline" href="/">
          서비스 이용약관
        </Link>
        과 <br />{' '}
        <Link className="underline" href="/">
          개인정보 수집 및 이용
        </Link>
        에 동의하게 됩니다.
      </Typography>
    </div>
  );
}
