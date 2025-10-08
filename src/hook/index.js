import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchData = (baseURL, endpoint) => {
  return useQuery({
    queryKey: ["fetchData"],
    queryFn: async () => {
      if (!baseURL || !endpoint)
        throw new Error("No baseURL or endpoint provided");
      const res = await axios(`${baseURL}${endpoint}`);
      const data = await res.json();
      console.log(data);
      if (!res.ok) throw new Error("Network response was not ok");
      return data;
    },
    staleTime: 10000, // 10 seconds
  });
};
