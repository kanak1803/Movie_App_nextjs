import axios from "axios";

const TMDB_API_KEY = "22d0295ca5ab13ebfe33daf43a400ef9"; // Replace 'your_api_key_here' with your actual API key
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const fetchTMDB = async (endpoint, queryParams = {}) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}${endpoint}`, {
      params: {
        api_key: TMDB_API_KEY,
        ...queryParams, // Include additional query parameters
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
