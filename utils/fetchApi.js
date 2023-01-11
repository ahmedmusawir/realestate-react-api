import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '7f4a47cd41msh94196ed5b449e80p161bf6jsnc0b28eef2ddd', // htmlfivedev
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      // 'X-RapidAPI-Key': '01979c6e5bmsh5cd6196dd41058bp1f6b24jsn0bb211c4b92ß4', // odesk.shourav
    },
  });

  return data;
};
