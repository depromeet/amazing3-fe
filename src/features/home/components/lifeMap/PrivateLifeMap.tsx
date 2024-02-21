'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';

import { useGetMemberData } from '@/hooks/reactQuery/auth';
import { useGetGoals } from '@/hooks/reactQuery/goal/useGetGoals';

const PrivateLifeMapBottomArea = dynamic(() => import('@/features/home/components/lifeMap/PrivateLifeMapBottomArea'));

import { LifeMapContent } from './LifeMapContent';

export const PrivateLifeMap = () => {
  const { data: memberData } = useGetMemberData();
  const { data: privateGoals } = useGetGoals();

  const downloadSectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <LifeMapContent goalsData={privateGoals} memberData={memberData} downloadSectionRef={downloadSectionRef} />
      <PrivateLifeMapBottomArea downloadSectionRef={downloadSectionRef} />
    </>
  );
};
