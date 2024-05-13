import { PreApplicationParams, PreApplicationResponse } from './type';
import preApplicationApi from './preApplicationApi';

export const postPreApplication = (params:PreApplicationParams) => preApplicationApi.post<PreApplicationResponse>('', params);
