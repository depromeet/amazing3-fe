import HttpClient from './httpClient';

// TODO: API 서버 배포 후 설정 필요
const API_URL = '';

export const api = new HttpClient({
  baseURL: API_URL,
});
