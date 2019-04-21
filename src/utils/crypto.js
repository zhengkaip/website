/**
 * 通过crypto-js实现 加解密工具
 * AES、HASH(MD5、SHA256)、base64
 */
import CryptoJS from 'crypto-js'

const KP = {
  key: '1234567812345678', // 秘钥 16*n:
  iv: '1234567812345678' // 偏移量
}

/**
 * 加密
 * @param data
 * @param key
 * @param iv
 * @returns {string} 返回的是base64格式的密文
 */
function getAesString (data, key, iv) {
  key = CryptoJS.enc.Utf8.parse(key)
  iv = CryptoJS.enc.Utf8.parse(iv)
  let encrypted = CryptoJS.AES.encrypt(data, key,
    {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
  return encrypted.toString()
}

/**
 * 解密
 * @param encrypted
 * @param key
 * @param iv
 * @returns {string}
 */
function getDAesString (encrypted, key, iv) {
  key = CryptoJS.enc.Utf8.parse(key)
  iv = CryptoJS.enc.Utf8.parse(iv)
  let decrypted = CryptoJS.AES.decrypt(encrypted, key,
    {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
  return decrypted.toString(CryptoJS.enc.Utf8)
}

// AES 对称秘钥加密
const aes = {
  en: (data) => getAesString(data, KP.key, KP.iv),
  de: (data) => getDAesString(data, KP.key, KP.iv)
}

// BASE64
const base64 = {
  en: (data) => CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data)),
  de: (data) => CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8)
}

// SHA256
const sha256 = (data) => {
  return CryptoJS.SHA256(data).toString()
}

// MD5
const md5 = (data) => {
  return CryptoJS.MD5(data).toString()
}

// get file MD5
const fileMD5 = (file) => {
  // CryptoJS.enc.Latin1.parse(file) 将js读出来的二进制流(已被UTF-16编码)还原成普通二进制流
  return CryptoJS.MD5(CryptoJS.enc.Latin1.parse(file)).toString()
}

/**
 * 签名
 * @param token 身份令牌
 * @param timestamp 签名时间戳
 * @param data 签名数据
 * @param isjson 签名数据 是否json字符串
 */
const sign = (token, timestamp, data, isjson = false) => {
  // 签名格式: timestamp + token + data(字典升序)
  if (isjson) {
    console.log(`签名 : timestamp(${timestamp}) + token(${token}) + json(${data})`)
    return md5(timestamp + token + data)
  }
  let ret = []
  for (let it in data) {
    let val = data[it]
    if (typeof val === 'object' && (!(val instanceof Array) || (val.length > 0 && (typeof val[0] === 'object')))) {
      val = JSON.stringify(val)
    }
    ret.push(it + val)
  }
  // 字典升序
  ret.sort()
  console.log(`签名 : timestamp(${timestamp}) + token(${token}) + data(字典升序)(${ret.join('')})`)
  return md5(timestamp + token + ret.join(''))
}

export {
  aes,
  md5,
  fileMD5,
  sha256,
  base64,
  sign
}
