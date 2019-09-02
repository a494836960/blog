import axios from 'axios'

// 超时时间
axios.defaults.timeout = 120000
// 返回其他状态吗
axios.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500 // 默认的
}
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true

// HTTPrequest拦截
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// HTTPresponse拦截
axios.interceptors.response.use(res => {
    if (res.data.status >= 400) {
        return Promise.reject(new Error(res.statusText))
    }
    return res
}, error => {
    return Promise.reject(new Error(error))
})

export default axios
