'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { AxiosResponse } from 'axios';
import { useAtom } from 'jotai';
import Cookies from 'js-cookie';

import { api } from '@/apis';
import { memberAtom } from '@/features/member/atoms';

const GoogleLogin = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');
  const [_, setMember] = useAtom(memberAtom);

  useEffect(() => {
    if (token) {
      Cookies.set('accessToken', token, { secure: process.env.NODE_ENV !== 'development', expires: 7 });

      try {
        api.get('/my').then((response: AxiosResponse) => {
          setMember(response.data);
          router.push(response.data.username ? '/home' : '/member/new/nickname');
        });
      } catch (error) {
        console.error(error);
      }
    }
  }, [router, setMember, token]);

  return <></>;
};

export default GoogleLogin;
