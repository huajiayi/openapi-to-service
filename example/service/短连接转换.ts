import request from 'umi-request';
import {
  R,
} from './typings';

/**
 * generateShortUrl GET /dwz
 */
export async function generateShortUrlUsingGET (
  params: {
    originUrl?: string; // originUrl
  },
  options?: Record<string, any>,
) {
  return request<R<any>>('/dwz', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * redirectUrl GET /dwz/{id}
 */
export async function redirectUrlUsingGET (
  pathVars: {
    id: string; // id
  },
  options?: Record<string, any>,
) {
  return request<any>(`/dwz/${pathVars.id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * redirectUrl POST /dwz/{id}
 */
export async function redirectUrlUsingPOST (
  pathVars: {
    id: string; // id
  },
  options?: Record<string, any>,
) {
  return request<any>(`/dwz/${pathVars.id}`, {
    method: 'POST',
    ...(options || {}),
  });
}
