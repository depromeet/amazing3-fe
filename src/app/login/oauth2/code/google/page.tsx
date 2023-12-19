'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import type { AxiosResponse } from 'axios';

import { api } from '@/apis';

const GoogleLogin = () => {
  const [email, setEmail] = useState<string>('');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  // TODO: query string으로 JWT Token을 받아서 쿠키에 저장하는 로직이 필요합니다.

  useEffect(() => {
    console.log('token: ', token);
    try {
      api
        .get('/my', {
          headers: {
            Authorization: `Bearer ${token}`, // replace `yourToken` with your actual token
          },
        })
        .then((response: AxiosResponse) => {
          setEmail(response.data.email);
          console.log(response.data.email);
        });
    } catch (error) {
      console.error(error);
    }
  }, [token]);

  return <div>current user email: {email}</div>;
};

export default GoogleLogin;
