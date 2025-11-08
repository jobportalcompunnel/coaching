import React from 'react';
import axios from 'axios';
//import useCurrentToken from '../utils/useCurrentToken';

axios.interceptors.request.use(function (config) {
  let token;
  //const [token2] =  useCurrentToken();
  //console.log(token2, "eee")
  const localTokenString = localStorage.getItem('persist:root');
  if (localTokenString) {
    var localTokenJson = JSON.parse(localTokenString);
    if (localTokenJson?.authSlice) {
      const sliceJson = JSON.parse(localTokenJson?.authSlice);
      token = sliceJson?.token;
    }
  }
  config.headers.Authorization = `Bearer ${token}`;
  config.headers.common = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };
  return config;
});

// const apiUrl = process.env.NODE_ENV !== 'production' ?
//  'http://localhost:7001' : process.env.REACT_APP_API_URL;
//  alert(process.env.REACT_APP_API_URL)
const getList = () => axios.get(`${process.env.REACT_APP_API_URL}/users/api/mock`);

const getLoginToken = (payload) => axios.post(`${process.env.REACT_APP_API_URL}/users/api/getLoginToken`, payload);

const employeeAPI = {
  getList,
  getLoginToken
};

export default employeeAPI;
