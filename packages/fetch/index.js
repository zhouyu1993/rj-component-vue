import './src/style.scss'

import fetch from 'isomorphic-fetch'
import queryString from 'query-string'

/*
 * @private
 * [发送fetch请求]
 * @param  {[String]} url     [请求地址]
 * @param  {[Object]} data    [param数据]
 * @param  {[Object]} options [配置参数]
 * e.g: [String]method, [Object]headers, [String]credentials
 * @return {[Object]}      [请求结果，暂时只支持json格式的请求]
 */

export default async (url = '', data = {}, options = {}) => {
  try {
    const reqUrl = Object.keys(data).length > 0 ? `${url}?${queryString.stringify(data)}` : url

    /*
     * method
     * credentials
     * headers
     * body GET 不可以 POST 可以
     * mode
     * etc.
     */
    const op = {
      method: 'GET', // GET / POST
      credentials: 'omit', // omit: 从不发送 cookies; include: 总是发送 cookies (即使跨域); same-origin: 只有当URL与响应脚本同源才发送 cookies
      ...options,
    }

    const res = await fetch(reqUrl, op)
    const json = await res.json()
    return json
  } catch (e) {
    throw new Error(e)
  }
}
