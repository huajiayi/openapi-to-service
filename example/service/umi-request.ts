import { request } from 'umi';

/**
 * 新增渠道  GET /channel/createChannel
 */
export async function createChannelUsingGET (
  params: {
    channelName?: string
  },
  options?: Record<string, any>,
) {
  return request<any>('/channel/createChannel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 新建推广  GET /channel/createPromotion
 */
export async function createPromotionUsingGET (
  params: {
    activityId?: number
    channelId?: number
    type?: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/channel/createPromotion', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 删除渠道  GET /channel/delChannel
 */
export async function delChannelUsingGET (
  params: {
    id?: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/channel/delChannel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 查询渠道列表  GET /channel/getChannelList
 */
export async function queryChannelListUsingGET (
  options?: Record<string, any>,
) {
  return request<any>('/channel/getChannelList', {
    method: 'GET',
    ...(options || {}),
  });
}
/**
 * 活动推广列表  GET /channel/queryTaskChannelByTaskId
 */
export async function queryTaskChannelByTaskIdUsingGET (
  params: {
    current: number
    pageSize: number
    taskId: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/channel/queryTaskChannelByTaskId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * generateShortUrl  GET /dwz
 */
export async function generateShortUrlUsingGET (
  params: {
    originUrl?: string
  },
  options?: Record<string, any>,
) {
  return request<any>('/dwz', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * redirectUrl  GET /dwz/${id}
 */
export async function redirectUrlUsingGET (
  options?: Record<string, any>,
) {
  return request<any>('/dwz/${id}', {
    method: 'GET',
    ...(options || {}),
  });
}
/**
 * redirectUrl  POST /dwz/${id}
 */
export async function redirectUrlUsingPOST (
  options?: Record<string, any>,
) {
  return request<any>('/dwz/${id}', {
    method: 'POST',
    ...(options || {}),
  });
}
/**
 * 创建活动  POST /fission/friend/createActivity
 */
export async function createActivityUsingPOST (
  body: {
    ...body,
  },
  options?: Record<string, any>,
) {
  return request<any>('/fission/friend/createActivity', {
    method: 'POST',
    body: {
      ...body,
    },
    ...(options || {}),
  });
}
/**
 * 查看活动详情  GET /fission/friend/getDetail
 */
export async function getDetailUsingGET (
  params: {
    taskId: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/fission/friend/getDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 修改活动时间  POST /fission/friend/modifyActivityTime
 */
export async function modifyActivityTimeUsingPOST (
  params: {
    beginTime: string
    endTime: string
    taskId?: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/fission/friend/modifyActivityTime', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 活动列表  GET /fission/friend/queryList
 */
export async function queryListUsingGET (
  params: {
    current?: number
    pageSize?: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/fission/friend/queryList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 生成海报  GET /mobile/generateSharePoster
 */
export async function generateSharePosterUsingGET (
  params: {
    activityId: number
    channelId: string
    externalId: string
    type: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/mobile/generateSharePoster', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 领奖  GET /mobile/getPrize
 */
export async function getPrizeUsingGET (
  params: {
    activityId: number
    externalId: string
    rules: string
    type: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/mobile/getPrize', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 获取奖品领取规则列表  GET /mobile/getPrizeRules
 */
export async function getPrizeRulesUsingGET (
  params: {
    activityId: number
    externalId: string
    type: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/mobile/getPrizeRules', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 领取奖品状态 领取完就奖品规则id没领取就是null  GET /mobile/getPrizeStatus
 */
export async function getPrizeStatusUsingGET (
  params: {
    activityId: number
    externalId: string
    type: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/mobile/getPrizeStatus', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 根据用户code获取用户  GET /mobile/getUserByCode
 */
export async function getUserByCodeUsingGET (
  params: {
    activityId?: string
    code?: string
  },
  options?: Record<string, any>,
) {
  return request<any>('/mobile/getUserByCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 助力列表  GET /mobile/queryHelpList
 */
export async function getHelpListUsingGET (
  params: {
    current: number
    current: number
    externalId: string
    pageSize: number
    type: number
    activityId?: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/mobile/queryHelpList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 修改背景图  PUT /moment/black/image
 */
export async function updateUserMomentBlackImageUsingPUT (
  params: {
    imageId?: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/moment/black/image', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 编辑朋友圈  POST /moment/edit/moment
 */
export async function editMomentUsingPOST (
  body: {
    ...body,
  },
  options?: Record<string, any>,
) {
  return request<any>('/moment/edit/moment', {
    method: 'POST',
    body: {
      ...body,
    },
    ...(options || {}),
  });
}
/**
 * 朋友圈列表  GET /moment/list
 */
export async function getMomentsByTypeUsingGET (
  params: {
    current?: number
    pageSize?: number
    type?: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/moment/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 创建企业朋友圈  POST /moment/moment
 */
export async function createMomentUsingPOST (
  body: {
    ...body,
  },
  options?: Record<string, any>,
) {
  return request<any>('/moment/moment', {
    method: 'POST',
    body: {
      ...body,
    },
    ...(options || {}),
  });
}
/**
 * 删除朋友圈  DELETE /moment/moment
 */
export async function deleteMomentUsingDELETE (
  params: {
    id?: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/moment/moment', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 企业朋友圈配置  GET /moment/servers
 */
export async function getServersMomentUsingGET (
  params: {
    current?: number
    pageSize?: number
    userIds: any
  },
  options?: Record<string, any>,
) {
  return request<any>('/moment/servers', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 客户朋友圈同步  PUT /moment/sync/moment
 */
export async function syncMomentUsingPUT (
  params: {
    id?: number
    userIds?: any
  },
  options?: Record<string, any>,
) {
  return request<any>('/moment/sync/moment', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 获取客服朋友圈主页  GET /moment/user/moment
 */
export async function getUserMomentPageUsingGET (
  params: {
    corpId?: string
    userId?: string
  },
  options?: Record<string, any>,
) {
  return request<any>('/moment/user/moment', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 创建活动  POST /offiacction/createActivity
 */
export async function createActivityUsingPOST_1 (
  body: {
    ...body,
  },
  options?: Record<string, any>,
) {
  return request<any>('/offiacction/createActivity', {
    method: 'POST',
    body: {
      ...body,
    },
    ...(options || {}),
  });
}
/**
 * 查看活动详情  GET /offiacction/getDetail
 */
export async function getDetailUsingGET_1 (
  params: {
    taskId: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/offiacction/getDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 修改活动时间  POST /offiacction/modifyActivityTime
 */
export async function modifyActivityTimeUsingPOST_1 (
  params: {
    beginTime?: string
    endTime?: string
    taskId?: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/offiacction/modifyActivityTime', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 活动列表  GET /offiacction/queryList
 */
export async function queryListUsingGET_1 (
  params: {
    current?: number
    pageSize?: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/offiacction/queryList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 分页查询海报列表  GET /poster
 */
export async function getPosterListUsingGET (
  params: {
    current?: number
    pageSize?: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/poster', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 新建海报信息  POST /poster
 */
export async function createPosterUsingPOST (
  body: {
    ...body,
  },
  options?: Record<string, any>,
) {
  return request<any>('/poster', {
    method: 'POST',
    body: {
      ...body,
    },
    ...(options || {}),
  });
}
/**
 * 更新海报信息  PUT /poster
 */
export async function updatePosterUsingPUT (
  body: {
    ...body,
  },
  options?: Record<string, any>,
) {
  return request<any>('/poster', {
    method: 'PUT',
    body: {
      ...body,
    },
    ...(options || {}),
  });
}
/**
 * 删除海报信息  DELETE /poster
 */
export async function deletePosterUsingDELETE (
  params: {
    id?: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/poster', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 下载上传模板  GET /rules/downloadTemplate
 */
export async function downloadTemplateUsingGET (
  options?: Record<string, any>,
) {
  return request<any>('/rules/downloadTemplate', {
    method: 'GET',
    ...(options || {}),
  });
}
/**
 * 获取任务规则  GET /rules/getRulesByTaskId
 */
export async function getActivityRulesUsingGET (
  params: {
    taskId?: number
    type?: string
  },
  options?: Record<string, any>,
) {
  return request<any>('/rules/getRulesByTaskId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 上传奖品卡  POST /rules/uploadPrizeCard
 */
export async function uploadPrizeCardUsingPOST (
  options?: Record<string, any>,
) {
  return request<any>('/rules/uploadPrizeCard', {
    method: 'POST',
    ...(options || {}),
  });
}
/**
 * 渠道分析  GET /statistic/channelAnalysis/${id}
 */
export async function channelAnalysisUsingGET (
  params: {
    endDate: string
    startDate: string
  },
  options?: Record<string, any>,
) {
  return request<any>('/statistic/channelAnalysis/${id}', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 渠道统计  GET /statistic/channelStatistic/${id}
 */
export async function channelStatisticUsingGET (
  options?: Record<string, any>,
) {
  return request<any>('/statistic/channelStatistic/${id}', {
    method: 'GET',
    ...(options || {}),
  });
}
/**
 * 客户列表  GET /statistic/customers/${id}
 */
export async function channelStatisticUsingGET_1 (
  params: {
    current: number
    size: number
  },
  options?: Record<string, any>,
) {
  return request<any>('/statistic/customers/${id}', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/**
 * 好友裂变概览  GET /statistic/friendOverview/${id}
 */
export async function friendOverviewUsingGET (
  options?: Record<string, any>,
) {
  return request<any>('/statistic/friendOverview/${id}', {
    method: 'GET',
    ...(options || {}),
  });
}
/**
 * 客户增长趋势  GET /statistic/incrementLine/${id}
 */
export async function incrementLineUsingGET (
  options?: Record<string, any>,
) {
  return request<any>('/statistic/incrementLine/${id}', {
    method: 'GET',
    ...(options || {}),
  });
}
