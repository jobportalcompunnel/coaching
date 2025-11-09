import axios from "axios";
const BASE_URL = "http://localhost:4000";

export interface userData {
  username: string,
  password: string
}
const getList =(payload: userData) => {
  console.log(payload);
  return axios.post<userData>(`${BASE_URL}/user`, payload);
}

const getUserDetail =(userid: number) => {
  return axios.get<any>(`${BASE_URL}/user/${userid}`);
}

const employeeAPI = {
  getList,
  getUserDetail
}
export default employeeAPI;