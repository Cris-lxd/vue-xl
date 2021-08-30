function setLocaStorage(name, obj) {
  localStorage.setItem(name, JSON.stringify(obj))
}
function getStorage(name) {
  return JSON.parse(localStorage.getItem(name))
}
function removeStorage(name) {
  localStorage.removeItem(name)
}
export {
  setLocaStorage,
  removeStorage,
  getStorage
}