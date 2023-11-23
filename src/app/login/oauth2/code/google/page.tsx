'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AxiosResponse } from 'axios';

import { api } from '@/apis';

export default function GoogleLogin() {
  const [email, setEmail] = useState<string>('');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  // TODO: query string으로 JWT Token을 받아서 쿠키에 저장하는 로직이 필요합니다.

  useEffect(() => {
    try {
      api.get('/my').then((response: AxiosResponse) => {
        setEmail(response.data.email);
        console.log(response.data.email);
      });
    } catch (error) {
      console.error(error);
    }
  }, [token]);

  return <div>current user email: {email}</div>;
}
