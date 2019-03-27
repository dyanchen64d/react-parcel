/**
 * desc: 登录注销
 * User: Renjian.Tang/renjian.tang@gymboglobal.com
 * Date: 2019/3/25
 * Time: 下午7:22
 */

/// <reference path="./.h/login.d.ts" />

import Request from '@src/common/request';
import {BaseConfigApi} from "@src/api/baseConfig";

/**
 * 登录
 * @param params
 * @returns {Promise}
 */
export const login = (data:loginParams):Promise<any> => {
    const body = {
        url:BaseConfigApi.login,
        params:data
    };
    return Request.post(body)
}