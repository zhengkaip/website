// set function parseTime,formatTime to filter
export { parseTime, formatTime } from '../utils'

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

export function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

/**
 * 数字 格式化
 * @param num
 * @param digits
 * @returns {string}
 */
export function numberFormatter (num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

export function toThousandslsFilter (num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * 格式化金额
 * @param {number} amount 金额
 * @param {string} [symbol] 货币符号
 * @param {number} [digits] 小数位数
 * @returns {string} 格式化后的数字，默认两位小数
 */
export function currency (amount, symbol = '￥', digits = 2) {
  return `${symbol}${Number(amount).toFixed(digits)}`
}

/**
 * 将手机号中间4位数字替换为星号
 * @param {string} str - 待处理字符串
 * @returns {string} 已处理字符串
 */
export function functionasterisk (str) {
  str = String(str)
  return `${str.substr(0, 3)}****${str.substr(-4, 4)}`
}

/**
 * 将长数字转化成以空格分隔的每四个数字为一组的字符串
 * @param {string} digits - 待处理字符串
 * @returns {string} 已处理字符串
 */
export function functiondigitify (digits) {
  return String(digits).replace(/\d{4}/g, (fourDigits) => `${fourDigits} `)
}

export function getdefaultImg (imgURL) {
  if (!imgURL) {
    imgURL = '../../static/images/default.jpg'
  }
  return imgURL
}
