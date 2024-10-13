export const fetchDataFromAPI = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  };
  