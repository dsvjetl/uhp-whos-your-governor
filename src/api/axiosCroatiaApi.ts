import axios from 'axios';

const axiosCroatiaApi = axios.create({
  baseURL: 'https://tehcon.com.hr/api/CroatiaTownAPI',
});

export { axiosCroatiaApi };
