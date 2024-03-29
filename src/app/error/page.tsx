import { StandardErrorPage } from '@/features/customErrors/components';

const ErrorPage = () => {
  return <StandardErrorPage statusCode={500} />;
};

export default ErrorPage;
