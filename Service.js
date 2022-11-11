import fetch from 'auth/FetchInterceptor'

const nadeService = {}

nadeService.retrive = function (endpoint, params) {
  return fetch({
    url: endpoint,
    method: 'get',
    params
  })
}

nadeService.create = function (endpoint, data, headers) {
  return fetch({
    url: endpoint,
    method: 'post',
    data: data,
    headers: headers
  })
}

nadeService.update = function (endpoint, data) {
  return fetch({
    url: endpoint,
    method: 'put',
    data: data
  })
}
nadeService.delete = function (endpoint, data) {
  return fetch({
    url: endpoint,
    method: 'delete',
    data: data
  })
}
export default nadeService
