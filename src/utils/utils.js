// 长度规则验证
function lengthRule (rule, value, callback, num) {
  var len = 0
  for (var i = 0; i < value.length; i++) {
    var a = value.charAt(i)
    if (a.match(/[^\x00-\xff]/ig) != null) {
      len += 2
    } else {
      len += 1
    }
  }
  if (len > 2 * num) {
    callback(new Error(`长度限制为${num}个汉字或${2 * num}个字符`))
  } else {
    callback()
  }
}

export default {
  lengthRule: lengthRule
}
