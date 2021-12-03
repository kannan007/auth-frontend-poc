import API from './axios-custom';

const createPostService = (data) => {
  return API.post(`/api/posts`, data)
    .then((res) => res.data)
    .catch((err) => {
      console.error({ err }, "Dummy");
      throw err;
    });
};

export default createPostService;
