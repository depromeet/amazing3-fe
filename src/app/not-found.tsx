import { DefaultErrorPage } from '@/features/customErrors/components';

const NotFoundPage = () => {
  return <DefaultErrorPage statusCode={404} />;
};

export default NotFoundPage;
