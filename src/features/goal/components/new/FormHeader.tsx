'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import BackIcon from '@/assets/icons/goal/back-icon.svg';
import CloseIcon from '@/assets/icons/goal/close-icon.svg';
import { useGetMemberData } from '@/hooks/reactQuery/auth';

import { NEW_GOAL_FORM_ORDERS_LENGTH } from '../../constants';

interface FormHeaderProps {
  formNumber: number;
}

const FormHeader = ({ formNumber }: FormHeaderProps) => {
  const totalPages = NEW_GOAL_FORM_ORDERS_LENGTH;
  const currentProgress = (formNumber / totalPages) * 100;

  const { data: memberData } = useGetMemberData();

  const router = useRouter();
  const handleClickBackButton = () => {
    router.back();
  };

  return (
    <div className="flex justify-between items-center">
      <button onClick={handleClickBackButton} type="button">
        <BackIcon />
      </button>
      <div className="w-[30%]">
        <div className="relative w-[100%] h-[6px] rounded-lg bg-white">
          <div
            className="absolute top-0 left-0 h-[6px] rounded-lg bg-blue-30 z-[1]"
            style={{ width: `${currentProgress}%` }}
          />
        </div>
      </div>
      <Link href={{ pathname: `/home/${memberData?.username}` }}>
        <CloseIcon />
      </Link>
    </div>
  );
};

export default FormHeader;
