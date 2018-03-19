/**
 * 长整数千分位格式化
 */

export default num => {
  let numstr = (num || 0).toString()
  let result = ''
  while (numstr.length > 3) {
    result = `,${numstr.slice(-3)}${result}`
    numstr = numstr.slice(0, numstr.length - 3)
  }
  if (numstr) { result = numstr + result }
  return result
}
