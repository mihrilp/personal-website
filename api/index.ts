import axios from 'axios';

export const fetchBlogPosts = async () => {
    try {
      const username = 'mihrilp';
      const response = await axios.get(
        `https://dev.to/api/articles?username=${username}`
      );
      return response;
    } catch (error) {
      console.error('Error occurred while retrieving blog posts.', error);
    }
  };