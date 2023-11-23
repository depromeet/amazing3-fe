import HttpClient from './httpClient';

// TODO: API 서버 배포 후 설정 필요
const API_URL = 'https://8d84-118-219-132-159.ngrok-free.app';

export const api = new HttpClient({
  baseURL: API_URL,
});
