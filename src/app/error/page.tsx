import { DefaultErrorPage } from '@/features/customErrors/components';

const ErrorPage = () => {
  return <DefaultErrorPage statusCode={500} />;
};

export default ErrorPage;
