import { useEffect, useState } from "react";

const BASE_URL =
  "https://infallible-tereshkova-717266.netlify.app/.netlify/functions/server";

export const useFetch = (url: string) => {
  const [data, setData] = useState<unknown | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}${url}`);
        const json = await response.json();
        if ((json && json.error) || !response.ok) {
          setData(null);
          return setError(json.error || response.statusText);
        }
        setData(json);
        return setError(null);
      } catch (error) {
        setError(`${error} Could not fetch data`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
