'use client';

import { ErrorPageLayout } from '@/features/customErrors/components';

const Error = ({ error }: { error: Error & { digest?: string } }) => {
  return <ErrorPageLayout statusCode={403} />;
};

export default Error;
