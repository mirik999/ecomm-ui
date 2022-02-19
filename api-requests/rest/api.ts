import axios from 'axios';

const api = {
  translation: {
    getAll: (langCode: string = 'EN') => {
      return axios.get(`http://localhost:4004/translation/${langCode}`).then<Record<string, string>>((res) => res.data);
    },
  },
};

export default api;
