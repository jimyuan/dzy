// let apiRoot

/**
 * apiEnv: 各个不同环境所对应的 api 地址（公共部分）
 *
 * @type {Object}
 */
const apiEnv = {
  'local': {
    webAPI: 'http://localhost:8084/api'
  },
  'dev': {
    webAPI: 'http://10.66.1.133:8081/api'
  },
  'test': {
    webAPI: 'http://10.66.1.160:8087/api'
  },
  'prod': {
    webAPI: 'http://www.ebaoli.com/api'
  }
}

/**
 * 判断当前运行环境
 * 将当前所对应的 api 地址输出
 */
export default function () {
  switch (window.location.host) {
    // dev env
    case 'dev.env.com':
      return apiEnv.dev
    // test env
    case 'test.env.com':
      return apiEnv.test
    // prod env
    case 'prod.env.com':
      return apiEnv.prod
    // 默认情况：local env
    default:
      return apiEnv.local
  }
}
