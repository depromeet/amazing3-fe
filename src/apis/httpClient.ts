import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  isAxiosError,
} from 'axios';
import Cookies from 'js-cookie';

const getResult = (response: AxiosResponse) => response.data.body;

class HttpClient {
  client: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.client = axios.create(config);

    this.setInterceptor();
  }

  get<T>(...args: Parameters<typeof this.client.get>) {
    return this.client.get<T>(...args).then(getResult);
  }

  post<T>(...args: Parameters<typeof this.client.post>) {
    return this.client.post<T>(...args).then(getResult);
  }

  put<T>(...args: Parameters<typeof this.client.put>) {
    return this.client.put<T>(...args).then(getResult);
  }

  patch<T>(...args: Parameters<typeof this.client.patch>) {
    return this.client.patch<T>(...args).then(getResult);
  }

  delete<T>(...args: Parameters<typeof this.client.delete>) {
    return this.client.delete<T>(...args).then(getResult);
  }

  setInterceptor() {
    this.client.interceptors.request.use(this.onRequestFulfilled, this.onRequestRejected);
    this.client.interceptors.response.use(this.onResponseFulfilled, this.onResponseRejected);
  }

  onRequestFulfilled(config: InternalAxiosRequestConfig) {
    const token = Cookies.get('accessToken');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }

  onRequestRejected(error: AxiosError) {
    return Promise.reject(error);
  }

  onResponseFulfilled(response: AxiosResponse) {
    return response;
  }

  onResponseRejected(error: AxiosError) {
    if (!isAxiosError(error) || !error.response) return Promise.reject(error);

    const { status: errorStatus } = error.response;
    if (errorStatus === 401) {
      Cookies.remove('accessToken');
      window.location.href = '/';
    }
    if (500 == errorStatus && process.env.NODE_ENV !== 'development') {
      window.location.href = '/error';
    }

    return Promise.reject(error.response);
  }
}

export default HttpClient;
