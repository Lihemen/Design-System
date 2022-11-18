import axios from 'axios';

// Url used to make API requests
const base_url = process.env.REACT_APP_BASE_API_URL;

// Generate Authorization headers
const set_authorization_headers = () => {
  // Token can be gotten from state, session storage, server side, cache or local storage
  const token = localStorage.getItem('token');

  if (!token) return;

  return {
    Authorization: `Bearer ${token}`
  };
};

// An axios static instance wrapper with necessary configuration to make requests
const request = axios.create({
  baseURL: base_url,
  headers: {
    ...set_authorization_headers()
  }
});

export default request;
