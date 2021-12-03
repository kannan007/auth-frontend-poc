import API from './axios-custom';

const getPostsService = (data) => {
  return API.get(`/api/posts`, data)
    .then((res) => res.data)
    .catch((err) => {
      console.error({ err });
      throw err;
    });
};

export default getPostsService;
