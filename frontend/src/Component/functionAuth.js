
import axios from "axios";
export const register = newUser => {
  return axios
    .post("/api/v1/users/register", newUser)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
export const login = user => {
  return axios
    .post("/api/v1/users/login", user)
    .then(res => {
      console.log(res.data.token);
      localStorage.setItem("usertoken", res.data.token);
      return res.data.token;
    })
    .catch(err => console.log(err));
};
