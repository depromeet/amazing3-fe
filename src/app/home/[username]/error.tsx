'use client';

import Image from 'next/image';
import type { AxiosError } from 'axios';

import NullUserErrorImage from '@/assets/images/error/close.png';
import { DefaultErrorPage } from '@/features/customErrors/components';
import { ErrorPageLayout } from '@/features/customErrors/components/errorPageLayout';
import { ResetButton } from '@/features/customErrors/components/errorPageLayout/ResetButton';

const ERROR_STATUS_CODE = {
  public: 403,
  nullUser: 404,
};

const Error = ({ error }: { error: AxiosError & { digest?: string } }) => {
  if (error.status === ERROR_STATUS_CODE.public) return <DefaultErrorPage statusCode={403} />;
  if (error.status === ERROR_STATUS_CODE.nullUser)
    return (
      <ErrorPageLayout
        TopComponent={<Image src={NullUserErrorImage} width={146} height={189} alt="null_user_error" />}
        title={`앗, 존재하지 않는 인생지도에요. \n 페이지 주소를 다시 확인해주세요.`}
        footer={<ResetButton statusCode={403} />}
      />
    );
};

export default Error;
