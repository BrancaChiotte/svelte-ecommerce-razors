import axios from "axios";
import url from "./URL";
import setupUser from "./setupUser";

async function loginUser({ email, password }) {
  const response = await axios
    .post(`${url}/auth/local`, {
      identifier: email,
      // same as => password: password
      password
    })
    .catch(error => console.log(error));
  if (response) {
    // setup user
    setupUser(response);
  }
  return response;
}

export default loginUser;
