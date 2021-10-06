import axios from '../../config/axios';

export default {
  all: (options = { params: { apiKey: 'faf7e5bb' } }) =>
    axios.get('/', options).then((res) => res.data),
  details: (id) =>
    axios.get(`/?apikey=faf7e5bb&i=${id}`).then((res) => res.data),
};
