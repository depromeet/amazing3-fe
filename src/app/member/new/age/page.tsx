import { Button, ContentWrapper, Input } from '@/components';

/**
 * TODO: 추후 디자인 적용 필요
 */
const AgeInputPage = () => {
  const title = '반가워요, 닉네임님!\n생년월일을 입력해 주세요.';
  const description = 'beta에서는 생년월일을 수정할 수 없어요.';

  return (
    <>
      <ContentWrapper title={title} description={description}>
        <Input type="date" />
        <Button type="button">완료</Button>
      </ContentWrapper>
    </>
  );
};

export default AgeInputPage;
