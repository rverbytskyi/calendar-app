import axios from 'axios';

import {apiPrefix} from './../../etc/config.json';

export function getEvents(userid){
  return axios.get(`${apiPrefix}/events?userId=${userid}`);
}

export function expEvents(userid){
  return axios.get(`${apiPrefix}/events/export/${userid}`);
}

export function deleteEvent(id){
  return axios.delete(`${apiPrefix}/events?idToDel=${id}`).then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export function addEvent(data){
  return axios.post(`${apiPrefix}/events`, data).then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
