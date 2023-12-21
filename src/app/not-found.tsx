import { ErrorPageLayout } from '@/features/customErrors/components';

const NotFoundPage = () => {
  return <ErrorPageLayout statusCode={404} />;
};

export default NotFoundPage;
