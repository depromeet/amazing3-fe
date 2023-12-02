'use client';

export default function Home() {
  const onClickButton = () => {
    window.location.href =
      'https://8d84-118-219-132-159.ngrok-free.app/oauth2/authorization/google';
  };

  return (
    <div>
      <button type="button" onClick={onClickButton}>
        google로 로그인
      </button>
    </div>
  );
}
