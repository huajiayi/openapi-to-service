import request from 'umi-request';
import {
  ReceivePrizeVO,
  PrizeVO,
  PageInfo,
  HelpListVO,
} from './typings';

/**
 * 生成海报 GET /mobile/generateSharePoster
 */
export async function generateSharePosterUsingGET (
  params: {
    activityId: number; // 活动id
    channelId: string; // 渠道id
    externalId: string; // externalId
    type: number; // 类型：friend好友裂变|moments朋友圈
  },
  options?: Record<string, any>,
) {
  return request<string>('/mobile/generateSharePoster', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 领奖 GET /mobile/getPrize
 */
export async function getPrizeUsingGET (
  params: {
    activityId: number; // 活动id
    externalId: string; // externalId
    rules: string; // 奖品id
    type: number; // 类型：friend好友裂变|moments朋友圈
  },
  options?: Record<string, any>,
) {
  return request<ReceivePrizeVO>('/mobile/getPrize', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 获取奖品领取规则列表 GET /mobile/getPrizeRules
 */
export async function getPrizeRulesUsingGET (
  params: {
    activityId: number; // 活动id
    externalId: string; // externalId
    type: number; // 类型：friend好友裂变|moments朋友圈
  },
  options?: Record<string, any>,
) {
  return request<PrizeVO[]>('/mobile/getPrizeRules', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 领取奖品状态 领取完就奖品规则id没领取就是null GET /mobile/getPrizeStatus
 */
export async function getPrizeStatusUsingGET (
  params: {
    activityId: number; // 活动id
    externalId: string; // externalId
    type: number; // 类型：friend好友裂变|moments朋友圈
  },
  options?: Record<string, any>,
) {
  return request<ResultBody<long>>('/mobile/getPrizeStatus', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 根据用户code获取用户 GET /mobile/getUserByCode
 */
export async function getUserByCodeUsingGET (
  params: {
    activityId?: string; // activityId
    code?: string; // code
  },
  options?: Record<string, any>,
) {
  return request<object>('/mobile/getUserByCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 助力列表 GET /mobile/queryHelpList
 */
export async function getHelpListUsingGET (
  params: {
    current: number; // 当前页
    current: number; // 当前页
    externalId: string; // externalId
    pageSize: number; // 每页显示数
    type: number; // 类型：friend好友裂变|moments朋友圈
    activityId?: number; // activityId
  },
  options?: Record<string, any>,
) {
  return request<PageInfo<HelpListVO>>('/mobile/queryHelpList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
