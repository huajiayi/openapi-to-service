import request from 'umi-request';
import {
  TBPromotionChannel,
  PageInfo,
  PromotionChannelVO,
} from './typings';

/**
 * 新增渠道 GET /channel/createChannel
 */
export async function createChannelUsingGET (
  params: {
    channelName?: string; // channelName
  },
  options?: Record<string, any>,
) {
  return request<boolean>('/channel/createChannel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 新建推广 GET /channel/createPromotion
 */
export async function createPromotionUsingGET (
  params: {
    activityId?: number; // activityId
    channelId?: number; // channelId
    type?: number; // type
  },
  options?: Record<string, any>,
) {
  return request<boolean>('/channel/createPromotion', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 删除渠道 GET /channel/delChannel
 */
export async function delChannelUsingGET (
  params: {
    id?: number; // id
  },
  options?: Record<string, any>,
) {
  return request<boolean>('/channel/delChannel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 查询渠道列表 GET /channel/getChannelList
 */
export async function queryChannelListUsingGET (
  options?: Record<string, any>,
) {
  return request<TBPromotionChannel[]>('/channel/getChannelList', {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * 活动推广列表 GET /channel/queryTaskChannelByTaskId
 */
export async function queryTaskChannelByTaskIdUsingGET (
  params: {
    current: number; // current
    pageSize: number; // pageSize
    taskId: number; // taskId
  },
  options?: Record<string, any>,
) {
  return request<PageInfo<PromotionChannelVO>>('/channel/queryTaskChannelByTaskId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
