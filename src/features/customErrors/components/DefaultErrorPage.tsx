'use client';

import Image from 'next/image';

import LockImage from '@/assets/images/error/lock.png';

import { ErrorPageLayout, type ErrorPageLayoutProps } from './errorPageLayout/ErrorPageLayout';
import { ResetButton } from './errorPageLayout/ResetButton';
import { StatusCodeError } from './errorPageLayout';

type StandardStatusCodeProps = 404 | 500 | 403;
export interface DefaultErrorPageProps {
  statusCode: StandardStatusCodeProps;
}

type ErrorValuesProps = Record<StandardStatusCodeProps, ErrorPageLayoutProps>;

const ERROR_VALUES: ErrorValuesProps = {
  404: {
    title: '원하시는 페이지를 찾을 수 없어요. \n 페이지 주소를 다시 확인해 주세요.',
    TopComponent: <StatusCodeError status={404} />,
    bottomImage: 'default',
    footer: <ResetButton statusCode={404} />,
  },
  500: {
    title: '앗, 에러가 발생했어요. \n 다시 시도해 주세요.',
    TopComponent: <StatusCodeError status={500} />,
    bottomImage: 'default',
    footer: <ResetButton statusCode={500} />,
  },
  403: {
    title: '공개되지 않은 인생지도에요. \n 돌아가세요.',
    TopComponent: <Image src={LockImage} width={146} height={189} alt="403_error" />,
    bottomImage: 'public',
    footer: <ResetButton statusCode={403} />,
  },
};

export const DefaultErrorPage = ({ statusCode }: DefaultErrorPageProps) => (
  <ErrorPageLayout
    TopComponent={ERROR_VALUES[statusCode].TopComponent}
    title={ERROR_VALUES[statusCode].title}
    bottomImage={ERROR_VALUES[statusCode].bottomImage}
    footer={ERROR_VALUES[statusCode].footer}
  />
);
