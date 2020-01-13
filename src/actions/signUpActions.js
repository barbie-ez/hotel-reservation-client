import Axios from "axios";

export function signUpUser(userData) {
  console.log(userData["user"]);
  return dispach => {
    Axios.post("https://localhost:5001/api/members/signup", userData["user"]);
  };
}
