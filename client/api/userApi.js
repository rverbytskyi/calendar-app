import axios from 'axios';

import {apiPrefix} from './../../etc/config.json';

export function signIn(data){
  return axios.post(`${apiPrefix}/users`, data).then(data)
  .catch(function (error) {
    console.log(error);
  });
}
