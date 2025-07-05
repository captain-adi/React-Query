import { useQuery } from 'react-query';

export const useFetchRandomData = (baseUrl, endpoint) => {
  return useQuery(['randomData', endpoint], async () => {
    const response = await fetch(`${baseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
};