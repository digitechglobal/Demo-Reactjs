import axios from 'axios';
import * as Config from './config';
import Cookies from 'js-cookie';

export function callApi(endpoint, method = 'GET', body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });

}

export function callApiAuth(endpoint, method = 'GET', body) {
  let accessToken = '';
  accessToken = Cookies.get('accessToken');
  if (accessToken == '') {
    return alert('aaa');
  }
  const pasrseUser = JSON.parse(accessToken);
  return axios({
    method: method,
    headers: {
      Authorization: `Bearer ${pasrseUser.token}`,
    },
    url: `${Config.API_URL}/${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im50aHU1QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzIiwiaWF0IjoxNjAzMTU4MjQ5LCJleHAiOjE2MDMxNTkxNDl9.yfzYCrGF6Hgn1wqFIRF4urPqCZc70dhS3e72omQe4mI
