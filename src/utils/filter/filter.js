function formatTime(value, fmt) {
    let getDate = new Date(parseInt(value))
    let o = {
        'M+': getDate.getMonth() + 1,
        'd+': getDate.getDate(),
        'h+': getDate.getHours(),
        'm+': getDate.getMinutes(),
        's+': getDate.getSeconds()
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return fmt;
}
export default {
    formatTime: formatTime
}