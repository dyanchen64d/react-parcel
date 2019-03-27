/**
 * desc:
 * User: Renjian.Tang/renjian.tang@gymboglobal.com
 * Date: 2019/3/26
 * Time: 上午10:56
 */
import Request from '@src/common/request';
import {RoleApi} from "@src/api/roleApi";

/**
 * 角色列表
 * @param params
 * @returns {Promise}
 */
export const queryRoleList = ():Promise<any> => {
    const body = {
        url:RoleApi.roleList,
        params:{}
    };
    return Request.post(body)
};
/**
 * 修改角色
 * @param data
 */
export const updateRole = (data:any) => {
    const body = {
        url:RoleApi.uploadRole,
        params: data
    };
    return Request.post(body)
}