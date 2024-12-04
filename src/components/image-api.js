import axios from 'axios';

const myAxios = axios.create({
  baseURL: 'https://api.unsplash.com',
});

export default async function FetchImages(query, page) {
  const params = {
    query: query,
    page: page,
    per_page: 12,
    client_id: 'NGBz_nP6r-UT1dDt9Xo_ZEjG4XuSomOyLLQ-eAoR6c0',
  };
  const response = await myAxios.get('/search/photos', { params });
  return {
    results: response.data.results,
    total: response.data.total,
  };
}
