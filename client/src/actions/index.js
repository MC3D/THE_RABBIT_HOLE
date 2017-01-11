import axios from 'axios';

const ROOT_URL = "http://localhost:3090";

export function signinUser({ email, password}) {
  return function(dispatch) {
    // submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password });
    // if request is good ...
    // * update state to indicate user is authenticated
    // * save jwt token
    // * redirect to router '/feature'


    // if request is bad ...
    // * show error to user

  }
}
