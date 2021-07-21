import request from 'umi-request';
import {
  TBFissionPoster,
  TBPrizeRules,
  TbTagInfo,
  成员参数,
  新建活动VO,
  PageInfo,
  ActivityListVO,
} from './typings';

/**
 * 创建活动 POST /fission/friend/createActivity
 */
export async function createActivityUsingPOST (
  data: {
    activityName: string; // 活动名称
    activityStatus: number; // 活动状态
    beginTime: string; // 开始时间
    corpId: string; // 企业id
    createTime: string; // 创建时间
    createUser: number; // 创建人
    endTime: string; // 结束时间
    gender: number; // 参加用户性别 全部：-1；位置：0；男：1；女：2
    id: number; // 
    isDelInvalid: boolean; // 是否删除失效
    isDeleted: boolean; // 是否删除
    isNewCus: boolean; // 是否为新客户条件
    joinText: string; // 加入文案
    poster: TBFissionPoster; // 海报
    posterJson: string; // 前段渲染用的冗余字段
    rules: TBPrizeRules[]; // 规则
    successText: string; // 成功提醒文案
    tagIds: number[]; // 标签id集合
    tags: TbTagInfo[]; // 屏蔽用户
    updateTime: string; // 更新时间
    updateUser: number; // 更新人
    userIds: number[]; // 用户id集合
    users: 成员参数[]; // 企业标签
    usersCode: string; // 这个活动的专属客服，在创建的时候生成
  },
  options?: Record<string, any>,
) {
  return request<any>('/fission/friend/createActivity', {
    method: 'POST',
    data: {
      ...data,
    },
    ...(options || {}),
  });
}

/**
 * 查看活动详情 GET /fission/friend/getDetail
 */
export async function getDetailUsingGET (
  params: {
    taskId: number; // taskId
  },
  options?: Record<string, any>,
) {
  return request<新建活动VO>('/fission/friend/getDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 修改活动时间 POST /fission/friend/modifyActivityTime
 */
export async function modifyActivityTimeUsingPOST (
  params: {
    beginTime: string; // beginTime
    endTime: string; // endTime
    taskId?: number; // taskId
  },
  options?: Record<string, any>,
) {
  return request<boolean>('/fission/friend/modifyActivityTime', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 活动列表 GET /fission/friend/queryList
 */
export async function queryListUsingGET (
  params: {
    current?: number; // current
    pageSize?: number; // pageSize
  },
  options?: Record<string, any>,
) {
  return request<PageInfo<ActivityListVO>>('/fission/friend/queryList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
