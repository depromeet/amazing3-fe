import HttpServer from './httpServer';

export const api = new HttpServer({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
