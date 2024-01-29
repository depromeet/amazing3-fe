import { cookies } from 'next/headers';
import type { AxiosError } from 'axios';
import { type InternalAxiosRequestConfig, isAxiosError } from 'axios';

import HttpClient from './httpClient';

class HttpServer extends HttpClient {
  onRequestFulfilledServer(config: InternalAxiosRequestConfig) {
    const cookieStore = cookies();
    const token = cookieStore.get('accessToken')?.value;

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }

  onResponseRejectedServer(error: AxiosError) {
    if (!isAxiosError(error) || !error.response) return Promise.reject(error);

    const { status: errorStatus } = error.response;
    if (errorStatus === 401) {
      const cookieStore = cookies();
      cookieStore.delete('accessToken');
      window.location.href = '/';
    }
    if (500 == errorStatus && process.env.NODE_ENV !== 'development') {
      window.location.href = '/error';
    }

    return Promise.reject(error.response);
  }

  setInterceptor() {
    this.client.interceptors.request.use(this.onRequestFulfilledServer, this.onRequestRejected);
    this.client.interceptors.response.use(this.onResponseFulfilled, this.onResponseRejectedServer);
  }
}

export default HttpServer;
