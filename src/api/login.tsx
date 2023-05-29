import axios from 'axios';
const EDUCONNECT_URL = `http://localhost:8080/employees`
export const verifyLogin = () => {
    //api call goes here
  // var response =  axios.get(`${EDUCONNECT_URL}/list`);
    var apiresponse ={
        "data": {
            "id": 0,
            "firstName": null,
            "lastName": null,
            "username": null,
            "accessToken": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhcnVuIiwiZW1haWwiOiJhcnVuIiwibmJmIjoxNjgzNzQ3ODM1LCJleHAiOjE2ODM3NDg0MzUsImlhdCI6MTY4Mzc0NzgzNSwiaXNzIjoiSXNzdWVyIiwiYXVkIjoiQXVkaWVuY2UifQ.WHjAF13yS7D_TPsJ4mDY-u5QhDjI1JgY_IiBYtISqzj4HKGQDjBTunc9OChDC_QhfDbPfUlw_HSkjD8GTRlSlw"
        },
        "succeeded": true,
        "message": null
    };
    console.log(apiresponse)
    return true;
  };
  