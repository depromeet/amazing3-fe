'use client';

import { StandardErrorPage } from '@/features/customErrors/components';

const Error = ({ error }: { error: Error & { digest?: string } }) => {
  return <StandardErrorPage statusCode={403} />;
};

export default Error;
