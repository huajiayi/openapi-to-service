
/**
* 
*/
export type ActivityListVO = {
  activityName?: string; // 活动名称
  activityStatus?: number; // 活动状态
  beginTime?: string; // 开始时间
  createTime?: string; // 创建时间
  endTime?: string; // 结束时间
  id?: number; // 
}

/**
* 
*/
export type HelpListVO = {
  avatar?: string; // 助力头像
  externalUserId?: string; // 外部联系人id
  failCause?: string; // 失败原因
  inviteStatus?: boolean; // 邀请状态
  nickName?: string; // 昵称
}

/**
* 
*/
export type PageInfo<T> = {
  current?: number; // 
  list?: T[]; // 
  mysqlStart?: number; // 
  pageSize?: number; // 
  pages?: number; // 
  total?: number; // 
}

/**
* 
*/
export type PrizeVO = {
  condition?: number; // 条件人数
  helpNumber?: number; // 帮助人数
  id?: number; // 奖品id
  inventory?: number; // 奖品库存
  level?: number; // 奖品等级
  number?: number; // 商品数量
  prizeName?: string; // 奖品名称
}

/**
* 
*/
export type PromotionChannelVO = {
  channelName?: string; // 渠道名称
  createTime?: string; // 创建时间
  id?: number; // 
  originalPath?: string; // 原始连接
  qrCode?: string; // 二维码地址
  userId?: number; // 用户id
  userName?: string; // 创建人name
}

/**
* 返回信息
*/
export type R<T> = {
  code?: number; // 状态码
  data?: T; // 承载数据
  msg?: string; // 返回消息
  success?: boolean; // 是否成功
}

/**
* 
*/
export type ReceivePrizeVO = {
  description?: string; // 领奖描述
  getType?: number; // 1：客服；2：兑换码；3：跳转
  prize?: string; // 奖品 激活码 || 跳转地址
  status?: boolean; // 
}

/**
* 
*/
export type ResponseResult = {
  data?: any; // 
  errorCode?: number; // 
  errorMessage?: string; // 
  info?: string; // 
}

/**
* 
*/
export type ResultBody<T> = {
  data?: number; // 承载数据
  errorCode?: number; // 状态码
  errorMassage?: string; // 返回消息
  success?: boolean; // 是否成功
}

/**
* 
*/
export type RulesVO = {
  batchNumber?: string; // 批次号
  condition?: number; // 获奖条件
  detail?: string; // 领奖描述
  getType?: number; // 获取方式 1：客服；2：兑换码；3：跳转
  id?: number; // 
  inventory?: number; // 库存
  level?: number; // 阶段：最多3层
  number?: number; // 商品数量
  prizeName?: string; // 奖品名称
  redirectUrl?: string; // 跳转地址
  tags?: TbTagInfo[]; // 标签id
  taskId?: number; // 任务Id
  taskType?: number; // 任务类型1：好友裂变；2朋友圈裂变
}

/**
* 
*/
export type TBFissionPoster = {
  avatarH?: number; // 
  avatarW?: number; // 
  avatarX?: number; // 头像x轴
  avatarY?: number; // 头像y轴
  backgroundImgPath?: string; // 海报底图
  fontColorRgb?: string; // 字体颜色
  fontSize?: number; // 昵称字体大小
  fontX?: number; // 字体x
  fontY?: number; // 字体y
  id?: number; // id
  qrCodeH?: number; // 
  qrCodeW?: number; // 
  qrCodeX?: number; // 
  qrCodeY?: number; // 
  taskId?: number; // 
  taskType?: number; // 
}

/**
* 
*/
export type TBPrizeRules = {
  batchNumber?: string; // 批次号
  condition?: number; // 获奖条件
  detail?: string; // 领奖描述
  getType?: number; // 获取方式 1：客服；2：兑换码；3：跳转
  id?: number; // 
  inventory?: number; // 库存
  level?: number; // 阶段：最多3层
  number?: number; // 商品数量
  prizeName?: string; // 奖品名称
  redirectUrl?: string; // 跳转地址
  tagIds?: number[]; // 标签id
  taskId?: number; // 任务Id
  taskType?: number; // 任务类型1：好友裂变；2朋友圈裂变
}

/**
* 
*/
export type TBPromotionChannel = {
  corpId?: string; // 
  id?: number; // 
  isDeleted?: boolean; // 
  name?: string; // 
}

/**
* 
*/
export type TbTagInfo = {
  corpId?: string; // 
  createDept?: number; // 创建部门
  createTime?: string; // 创建时间
  createUser?: number; // 创建人
  groupId?: string; // 
  id?: number; // 主键id
  isDeleted?: number; // 是否已删除
  name?: string; // 
  standby?: string; // 
  status?: number; // 业务状态
  tagId?: string; // 
  tagOrder?: number; // 
  updateTime?: string; // 更新时间
  updateUser?: number; // 更新人
}

/**
* 
*/
export type 单个朋友圈详情 = {
  contentType?: number; // 0:只有文字，1:图片，2:视频，3:链接
  createTime?: string; // 创建时间
  description?: string; // 链接描述
  images?: 朋友圈图片/视频[]; // 图片
  link?: string; // 链接
  text?: string; // 文本
  thumb?: string; // 链接缩略图
  video?: 朋友圈图片/视频; // 视频
}

/**
* 
*/
export type 发布/编辑朋友圈 = {
  contentType?: number; // 0:只有文字，1:图片，2:视频，3:链接
  id?: number; // 朋友圈id,编辑时需要填入
  link?: string; // 链接
  pictureIds?: number[]; // 图片id列表
  text?: string; // 文字
  userIds?: string[]; // 客服id列表
  videoId?: number; // 视频id
  videoPictureId?: number; // 视频封面id
}

/**
* 
*/
export type 成员参数 = {
  avatar?: string; // 头像
  blackImageId?: number; // 朋友圈背景图id
  corpId?: string; // corpId
  id?: number; // 主键
  roleType?: number; // 角色类型，2：是管理员
  type?: number; // type
  userId?: string; // 成员id
  userName?: string; // 成员名称
}

/**
* 
*/
export type 新建活动VO = {
  activityName?: string; // 活动名称
  activityStatus?: number; // 活动状态
  beginTime?: string; // 开始时间
  corpId?: string; // 企业id
  createTime?: string; // 创建时间
  createUser?: number; // 创建人
  endTime?: string; // 结束时间
  gender?: number; // 参加用户性别 全部：-1；位置：0；男：1；女：2
  id?: number; // 
  isDelInvalid?: boolean; // 是否删除失效
  isDeleted?: boolean; // 是否删除
  isNewCus?: boolean; // 是否为新客户条件
  joinText?: string; // 加入文案
  poster?: TBFissionPoster; // 海报
  posterJson?: string; // 前段渲染用的冗余字段
  rules?: TBPrizeRules[]; // 规则
  successText?: string; // 成功提醒文案
  tagIds?: number[]; // 标签id集合
  tags?: TbTagInfo[]; // 屏蔽用户
  updateTime?: string; // 更新时间
  updateUser?: number; // 更新人
  userIds?: number[]; // 用户id集合
  users?: 成员参数[]; // 企业标签
  usersCode?: string; // 这个活动的专属客服，在创建的时候生成
}

/**
* 
*/
export type 新建活动VO_1 = {
  activityName?: string; // 活动名称
  beginTime?: string; // 开始时间
  corpId?: string; // 企业id
  createTime?: string; // 创建时间
  createUser?: number; // 创建人
  endTime?: string; // 结束时间
  id?: number; // 
  isDelInvalid?: boolean; // 是否删除失效
  isDeleted?: boolean; // 是否删除
  joinText?: string; // 加入文案
  officialAccountId?: number; // 公众号id
  poster?: TBFissionPoster; // 海报
  posterJson?: string; // 前段渲染用的冗余字段
  rules?: TBPrizeRules[]; // 规则
  successText?: string; // 成功提醒文案
  updateTime?: string; // 更新时间
  updateUser?: number; // 更新人
  userIds?: number[]; // 用户id集合
  users?: 成员参数[]; // 企业标签
  usersCode?: string; // 这个活动的专属客服，在创建的时候生成
}

/**
* 
*/
export type 朋友圈列表 = {
  contentType?: number; // 0:只有文字，1:图片，2:视频，3:链接
  createTime?: string; // 创建日期
  createUser?: 成员参数; // 朋友圈创建者
  id?: number; // 朋友圈id
  images?: 朋友圈图片/视频[]; // 图片
  link?: string; // 链接
  servers?: 成员参数[]; // 该朋友圈阿德所属客服列表
  text?: string; // 文本
  type?: string; // 类型
  video?: 朋友圈图片/视频; // 视频
}

/**
* 
*/
export type 朋友圈图片/视频 = {
  mediaId?: number; // id
  mediaUrl?: string; // url
}

/**
* 
*/
export type 海报VO = {
  id?: number; // 海报id，修改时必填
  imageId?: number; // 海报图片
  name?: string; // 海报名称
  paramJson?: string; // 海报参数，json格式
}

/**
* 
*/
export type 用户朋友圈主页 = {
  backImage?: 朋友圈图片/视频; // 背景图片
  moments?: 单个朋友圈详情[]; // 朋友圈
  user?: 成员参数; // 客服简要详情
}
