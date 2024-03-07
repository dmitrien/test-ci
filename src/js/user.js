export function healthPerson(obj) {
  let result = obj.health
  let status = 'healthy'
  if (result <= 15) {
    status = 'critical'
  }
  if (16 <= result && result < 51) {
    status = 'wounded'
  }
  return status
}
