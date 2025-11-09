import axios from "axios";

const getMockData  = () => {
    return axios.get("http://localhost:7001/users/api/mock/2");
}

const cabApi = {
    getMockData
}

export default cabApi;