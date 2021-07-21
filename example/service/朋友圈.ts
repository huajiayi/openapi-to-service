import request from 'umi-request';
import {
  R,
  PageInfo,
  朋友圈列表,
  用户朋友圈主页,
} from './typings';

/**
 * 修改背景图 PUT /moment/black/image
 */
export async function updateUserMomentBlackImageUsingPUT (
  params: {
    imageId?: number; // imageId
  },
  options?: Record<string, any>,
) {
  return request<R<any>>('/moment/black/image', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 编辑朋友圈 POST /moment/edit/moment
 */
export async function editMomentUsingPOST (
  data: {
    contentType: number; // 0:只有文字，1:图片，2:视频，3:链接
    id: number; // 朋友圈id,编辑时需要填入
    link: string; // 链接
    pictureIds: number[]; // 图片id列表
    text: string; // 文字
    userIds: string[]; // 客服id列表
    videoId: number; // 视频id
    videoPictureId: number; // 视频封面id
  },
  options?: Record<string, any>,
) {
  return request<R<any>>('/moment/edit/moment', {
    method: 'POST',
    data: {
      ...data,
    },
    ...(options || {}),
  });
}

/**
 * 朋友圈列表 GET /moment/list
 */
export async function getMomentsByTypeUsingGET (
  params: {
    current?: number; // current
    pageSize?: number; // pageSize
    type?: number; // type
  },
  options?: Record<string, any>,
) {
  return request<R<PageInfo<朋友圈列表>>>('/moment/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 创建企业朋友圈 POST /moment/moment
 */
export async function createMomentUsingPOST (
  data: {
    contentType: number; // 0:只有文字，1:图片，2:视频，3:链接
    id: number; // 朋友圈id,编辑时需要填入
    link: string; // 链接
    pictureIds: number[]; // 图片id列表
    text: string; // 文字
    userIds: string[]; // 客服id列表
    videoId: number; // 视频id
    videoPictureId: number; // 视频封面id
  },
  options?: Record<string, any>,
) {
  return request<R<any>>('/moment/moment', {
    method: 'POST',
    data: {
      ...data,
    },
    ...(options || {}),
  });
}

/**
 * 删除朋友圈 DELETE /moment/moment
 */
export async function deleteMomentUsingDELETE (
  params: {
    id?: number; // id
  },
  options?: Record<string, any>,
) {
  return request<R<any>>('/moment/moment', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 企业朋友圈配置 GET /moment/servers
 */
export async function getServersMomentUsingGET (
  params: {
    current?: number; // current
    pageSize?: number; // pageSize
    userIds: string[]; // userIds
  },
  options?: Record<string, any>,
) {
  return request<R<any>>('/moment/servers', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 客户朋友圈同步 PUT /moment/sync/moment
 */
export async function syncMomentUsingPUT (
  params: {
    id?: number; // id
    userIds?: string[]; // userIds
  },
  options?: Record<string, any>,
) {
  return request<R<any>>('/moment/sync/moment', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 获取客服朋友圈主页 GET /moment/user/moment
 */
export async function getUserMomentPageUsingGET (
  params: {
    corpId?: string; // corpId
    userId?: string; // userId
  },
  options?: Record<string, any>,
) {
  return request<R<用户朋友圈主页>>('/moment/user/moment', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
