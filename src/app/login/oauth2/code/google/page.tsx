'use client';
import React, { useEffect } from 'react';
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
    console.log('token', token);
    if (token) {
      Cookies.set('accessToken', token, { expires: 7 });

      try {
        api.get('/my').then((response: AxiosResponse) => {
          if (!response.data.username) {
            setMember(response.data);
            router.push('/member/new/nickname');
          } else {
            setMember(response.data);
            router.push('/home');
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
  }, [router, setMember, token]);

  return <></>;
};

export default GoogleLogin;
