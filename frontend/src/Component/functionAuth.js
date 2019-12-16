import axios from "axios";
import decode from "jwt-decode";


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

export const checkAuth = async (props) => {
  var dateNow = new Date();
  if (!localStorage.usertoken) {
    props.history.push("/login");
    
  } else {
    const token = localStorage.getItem("usertoken");
    var decodedToken = await decode(token);
    var exp = decodedToken.exp
    console.log(new Date(Number(exp+"000")) );
    console.log(dateNow.getTime())
    if (exp < (dateNow.getTime()/1000)) {
      props.history.push("/login");
    }
  }
};

