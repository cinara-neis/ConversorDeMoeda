import axios from 'axios';

////Base URL: https://free.currencyconverterapi.com/api/v5/
// > 
const api = axios.create({
  baseURL:'https://free.currencyconverterapi.com/api/v5'
});

export default api;