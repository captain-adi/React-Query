import { useQuery } from "@tanstack/react-query";

export const useFetchData = (baseURL, endpoint) => {
  return useQuery({
    queryKey: ["data",baseURL,endpoint],
    queryFn: async () => {
      if (!baseURL || !endpoint)
        throw new Error("No baseURL or endpoint provided");
      const res = await fetch(`${baseURL}${endpoint}`);
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });
};
