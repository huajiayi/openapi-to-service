import request from 'umi-request';
import {
  RulesVO,
} from './typings';

/**
 * 下载上传模板 GET /rules/downloadTemplate
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
 * 获取任务规则 GET /rules/getRulesByTaskId
 */
export async function getActivityRulesUsingGET (
  params: {
    taskId?: number; // taskId
    type?: string; // type
  },
  options?: Record<string, any>,
) {
  return request<RulesVO[]>('/rules/getRulesByTaskId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 上传奖品卡 POST /rules/uploadPrizeCard
 */
export async function uploadPrizeCardUsingPOST (
  options?: Record<string, any>,
) {
  return request<string>('/rules/uploadPrizeCard', {
    method: 'POST',
    ...(options || {}),
  });
}
