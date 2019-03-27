/**
 * desc:
 * User: Renjian.Tang/renjian.tang@gymboglobal.com
 * Date: 2019/3/25
 * Time: 下午7:12
 */
class CommonUtils {
    /**
     * 获取路由参数
     * @param {string} str
     * @returns {any}
     */
    static urlSearchStringToObj (str:string) {
        const query = window.location.search.substring(1);
        const searchArr = query.split('&');
        for (let i = 0, l = searchArr.length ;i < l;i++) {
            const pair = searchArr[i].split("=");
            if(pair[0] === str){
                return pair[1];
            }
        }
        return false;
    }

    /**
     * bytes 转换 kb,mb,gb
     * @param bytes
     */
    static readAblizeBytes (bytes:number) {
        const s = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
        const e = Math.floor(Math.log(bytes)/Math.log(1024));
        return (bytes/Math.pow(1024, Math.floor(e))).toFixed(2)+" "+s[e];
    }
}

export {CommonUtils}