/* eslint-disable no-console */

const checkEnvVar = (name: string) => {
  const envVar = import.meta.env[name];
  if (!envVar) {
    console.error(`환경변수 파일에 ${name}가 존재하지 않습니다!`);
    return '';
  }
  return envVar;
};

// API 공통
export const API_PATH = checkEnvVar('VITE_API_PATH');
export const CSRF_TOKEN = checkEnvVar('VITE_CSRF_TOKEN');
