import axios from 'axios'
import iView from 'view-design'
import { getStorage } from "./SessionUtil";

const baseUrl = '/api'

/**
 * 请求前拦截
 * 若需要token的请求则加上token
 */
axios.interceptors.request.use(config => {
    iView.LoadingBar.start();     //开启iview进度条
    if(config.requireToken){
        let token = getStorage('token')
        config.headers.token = token
    }
    return config
})

/**
 * 检查响应状态并处理
 * @param response
 * @returns {{data, message: string, status}|{data: *, message: *, status}|*}
 */
function checkResponseStatus(response) {
    iView.LoadingBar.finish()
    if (response.status === 200 || response.status === 304) {
        let data = response.data;
        data.status = 200;
        return data
    }
    switch (response.status) {
        case 403:
            //权限不足
            return {
                status: response.status,
                message: "权限不足",
                data: response.data
            }
        case 401:
            this.$router.push("login")
            break;

        case 404:
            //未找到页面,跳转
            this.$router.push("notfound")
            break;
        case 500:
            //服务器内部错误
            return {
                status: response.status,
                message: response.statusText,
                data: response.statusText,
            }
        default:
            return {
                status: response.status,
                message: response.statusText,
                data: response.statusText,
            }
    }
}

/**
 * 检查状态码  返回最后数据
 * @param res
 * @returns {*}
 */
function checkResponseCode(res){
    if(res.status !== 200){
        //网络错误
    }
    return res
}

/**
 * 导出方法
 */
export default {

    /**
     * post请求
     * @param url api地址
     * @param data  数据
     * @param vue   vue
     * @param requireToken  是否需要token
     * @returns {*}
     */
    post(url,data,vue,requireToken){
        return axios({
            method : 'post',
            url : url,
            baseURL : baseUrl,
            cache : false,
            data : data,
            timeout : 100000,
            vue: vue,
            requireToken : requireToken == null ? true :requireToken,
            withCredentials: true,
            headers : {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(checkResponseStatus).then(checkResponseCode)
    },

    /**
     * get请求
     * @param url
     * @param params
     * @param vue
     * @param requireToken
     * @returns {*}
     */
    get(url,params,vue,requireToken){
        return axios({
            method: 'get',
            url: url,
            baseURL: baseUrl,
            params: params,
            timeout: 30000,
            vue: vue,
            withCredentials: true,
            requireToken: requireToken == null ? true : requireToken,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(checkResponseStatus).then(checkResponseCode)
    },



}
