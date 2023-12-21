import { ErrorPageLayout } from '@/features/customErrors/components';

const NotFoundPage = () => {
  return <ErrorPageLayout statusNum={404} />;
};

export default NotFoundPage;
