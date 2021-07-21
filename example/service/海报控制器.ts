import request from 'umi-request';
import {
  PageInfo,
  ResponseResult,
} from './typings';

/**
 * 分页查询海报列表 GET /poster
 */
export async function getPosterListUsingGET (
  params: {
    current?: number; // current
    pageSize?: number; // pageSize
  },
  options?: Record<string, any>,
) {
  return request<PageInfo<any>>('/poster', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 新建海报信息 POST /poster
 */
export async function createPosterUsingPOST (
  data: {
    id: number; // 海报id，修改时必填
    imageId: number; // 海报图片
    name: string; // 海报名称
    paramJson: string; // 海报参数，json格式
  },
  options?: Record<string, any>,
) {
  return request<ResponseResult>('/poster', {
    method: 'POST',
    data: {
      ...data,
    },
    ...(options || {}),
  });
}

/**
 * 更新海报信息 PUT /poster
 */
export async function updatePosterUsingPUT (
  data: {
    id: number; // 海报id，修改时必填
    imageId: number; // 海报图片
    name: string; // 海报名称
    paramJson: string; // 海报参数，json格式
  },
  options?: Record<string, any>,
) {
  return request<ResponseResult>('/poster', {
    method: 'PUT',
    data: {
      ...data,
    },
    ...(options || {}),
  });
}

/**
 * 删除海报信息 DELETE /poster
 */
export async function deletePosterUsingDELETE (
  params: {
    id?: number; // id
  },
  options?: Record<string, any>,
) {
  return request<ResponseResult>('/poster', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
