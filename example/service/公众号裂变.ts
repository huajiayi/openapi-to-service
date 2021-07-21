import request from 'umi-request';
import {
  TBFissionPoster,
  TBPrizeRules,
  成员参数,
  新建活动VO_1,
  PageInfo,
  ActivityListVO,
} from './typings';

/**
 * 创建活动 POST /offiacction/createActivity
 */
export async function createActivityUsingPOST_1 (
  data: {
    activityName: string; // 活动名称
    beginTime: string; // 开始时间
    corpId: string; // 企业id
    createTime: string; // 创建时间
    createUser: number; // 创建人
    endTime: string; // 结束时间
    id: number; // 
    isDelInvalid: boolean; // 是否删除失效
    isDeleted: boolean; // 是否删除
    joinText: string; // 加入文案
    officialAccountId: number; // 公众号id
    poster: TBFissionPoster; // 海报
    posterJson: string; // 前段渲染用的冗余字段
    rules: TBPrizeRules[]; // 规则
    successText: string; // 成功提醒文案
    updateTime: string; // 更新时间
    updateUser: number; // 更新人
    userIds: number[]; // 用户id集合
    users: 成员参数[]; // 企业标签
    usersCode: string; // 这个活动的专属客服，在创建的时候生成
  },
  options?: Record<string, any>,
) {
  return request<any>('/offiacction/createActivity', {
    method: 'POST',
    data: {
      ...data,
    },
    ...(options || {}),
  });
}

/**
 * 查看活动详情 GET /offiacction/getDetail
 */
export async function getDetailUsingGET_1 (
  params: {
    taskId: number; // taskId
  },
  options?: Record<string, any>,
) {
  return request<新建活动VO_1>('/offiacction/getDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 修改活动时间 POST /offiacction/modifyActivityTime
 */
export async function modifyActivityTimeUsingPOST_1 (
  params: {
    beginTime?: string; // beginTime
    endTime?: string; // endTime
    taskId?: number; // taskId
  },
  options?: Record<string, any>,
) {
  return request<boolean>('/offiacction/modifyActivityTime', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 活动列表 GET /offiacction/queryList
 */
export async function queryListUsingGET_1 (
  params: {
    current?: number; // current
    pageSize?: number; // pageSize
  },
  options?: Record<string, any>,
) {
  return request<PageInfo<ActivityListVO>>('/offiacction/queryList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
