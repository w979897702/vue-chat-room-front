/* eslint-disable no-unused-vars */
const normal = 0; // 正常
const expired = 1051; // 超时
const resFns = [];
const reqFns = [];
// 请求地址
const ORIGIN = process.env.NODE_ENV === 'development' ? '/api' : 'https://www.weixuzhao.top:9099/';

// 请求拦截器
export default function AxiosCreate(instance: any) {
  instance.defaults.baseURL = ORIGIN;
  instance.interceptors.response.use(
    (response: any) => {
      return response;
    },
    (error: any) => {
      let { response } = error;
      let msg = '网络错误!';
      // openNotification('error', msg);
      if (response) {
        return Promise.reject(response);
      }
      return Promise.reject(msg);
    }
  );
}
