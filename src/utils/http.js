import axios from "axios";

const instance = axios.create({
  timeout: 10000
})

// 响应拦截器
instance.interceptors.response.use(res => res.data, err => Promise.reject(err))

/**
 * get请求
 * @param {string} url 请求的url地址
 * @param {object} config {headers：{}}
 * @returns promise
 */
export const get = (url, config = {}) => instance.get(url, config)

export const del = (url, config = {}) => instance.delete(url, config)

export const post = (url, data = {}, config = {}) => instance.post(url, data, config)

export const put = (url, data = {}, config = {}) => instance.put(url, data, config)
