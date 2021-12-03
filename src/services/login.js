import API from "./axios-custom";

const loginService = (data) => {
  return API
    .post(`/api/users/login`, data)
    .then((res) => res.data)
    .catch((err) => {
      console.error({ err });
      throw err;
    });
};

export default loginService;
