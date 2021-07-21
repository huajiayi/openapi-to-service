import request from 'umi-request';
import {
  R,
} from './typings';

/**
 * 渠道分析 GET /statistic/channelAnalysis/{id}
 */
export async function channelAnalysisUsingGET (
  pathVars: {
    id: number; // id
  },
  params: {
    endDate: string; // endDate
    startDate: string; // startDate
  },
  options?: Record<string, any>,
) {
  return request<R<any>>(`/statistic/channelAnalysis/${pathVars.id}`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 渠道统计 GET /statistic/channelStatistic/{id}
 */
export async function channelStatisticUsingGET (
  pathVars: {
    id: number; // id
  },
  options?: Record<string, any>,
) {
  return request<R<any>>(`/statistic/channelStatistic/${pathVars.id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * 客户列表 GET /statistic/customers/{id}
 */
export async function channelStatisticUsingGET_1 (
  pathVars: {
    id: number; // id
  },
  params: {
    current: number; // 当前页
    size: number; // 每页的数量
  },
  options?: Record<string, any>,
) {
  return request<R<any>>(`/statistic/customers/${pathVars.id}`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 好友裂变概览 GET /statistic/friendOverview/{id}
 */
export async function friendOverviewUsingGET (
  pathVars: {
    id: number; // id
  },
  options?: Record<string, any>,
) {
  return request<R<any>>(`/statistic/friendOverview/${pathVars.id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * 客户增长趋势 GET /statistic/incrementLine/{id}
 */
export async function incrementLineUsingGET (
  pathVars: {
    id: number; // id
  },
  options?: Record<string, any>,
) {
  return request<R<any>>(`/statistic/incrementLine/${pathVars.id}`, {
    method: 'GET',
    ...(options || {}),
  });
}
