/**
 * desc: 用户类
 * User: Renjian.Tang/renjian.tang@gymboglobal.com
 * Date: 2019/3/25
 * Time: 下午7:57
 */
import {Storage} from "./storage";

declare interface UserModal {
    token:string,
    funcs:Array<string>
}

class User {
    static _key = "_user";
    static _user:UserModal=null;
    /**
     * 获取用户信息
     * @returns {UserModal}
     */
    static get user():UserModal {
        if(!this._user){
            this._user = Storage.get(this._key);
        }
        return this._user;
    }

    /**
     * 设置用户信息
     * @param {UserModal} user
     */
    static set user(user:UserModal){
        this._user = user;
        Storage.set(this._key, user);
    }

    /**
     * 获取头像
     * @returns {string}
     */
    static get token () {
        return this.user.token
    }
    /**
     * 菜单栏权限
     */
    static get funcs() {
        return this.user.funcs
    }

    /**
     * 判断是否权限
     * @param {string} uiid
     * @returns {boolean}
     */
    static hasPermission( permissionCodes:Array<string>) {
        if (!this.user.funcs) {
            return false;
        }
        return permissionCodes.some((permissionCode:string) => this.user.funcs.includes(permissionCode))
    }
}

export {User}