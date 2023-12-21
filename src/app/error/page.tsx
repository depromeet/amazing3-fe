import { ErrorPageLayout } from '@/features/customErrors/components';

const ErrorPage = () => {
  return <ErrorPageLayout statusCode={500} />;
};

export default ErrorPage;
