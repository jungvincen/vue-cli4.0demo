import request from '../http/request'

const api = {
  addPerson: '/api/addPerson'
}

export function addPerson({ name, age, sex }){
  return request(api.addPerson, 'POST', { name, sex,  age })
}
