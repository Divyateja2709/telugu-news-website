const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=in"; // Country set to India
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = "e4bcb08adc05a04804f3d4856c1b37af"; // Your API key

export const endpointPath = (country, category) =>
  `${API_DOMAIN}&category=${category}&lang=te&apikey=${API_KEY}`;  // lang=en for English

export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=te&apikey=${API_KEY}`;  // lang=en for English
