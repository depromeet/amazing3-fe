import { StandardErrorPage } from '@/features/customErrors/components';

const NotFoundPage = () => {
  return <StandardErrorPage statusCode={404} />;
};

export default NotFoundPage;
