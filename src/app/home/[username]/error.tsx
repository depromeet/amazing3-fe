'use client';

import { DefaultErrorPage } from '@/features/customErrors/components';

const Error = ({ error }: { error: Error & { digest?: string } }) => {
  return <DefaultErrorPage statusCode={403} />;
};

export default Error;
