export function healthPerson({health}) {
  if (health <= 15) {
    return 'critical'
  }
  if (health <= 50) {
    return 'wounded'
  }
  return 'healthy'
}

export function sortPerson(listObj) {
  return listObj.sort((a, b) => {
    if (a.health < b.health) {
       return 1;
     }
     if (a.health > b.health) {
       return -1;
     }
     return 0;
    });
}
