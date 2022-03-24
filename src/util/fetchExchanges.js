const URL = 'https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1';

const fetchExchanges = async () => {
  const response = await fetch(URL);
  if (response.ok) {
    return response.json();
  }
  // TODO: redirect to error page when fetch failed
  return [];
};

export default fetchExchanges;
