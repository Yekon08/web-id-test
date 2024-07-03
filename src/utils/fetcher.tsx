import { TSchema } from "@sinclair/typebox";
import { TypeCheck } from "@sinclair/typebox/compiler";
import { useEffect, useState } from "react";

export const useFetch = <T extends TSchema>(
  url: string,
  validation: TypeCheck<T>
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json: T = await response.json();
        if (validation.Check(json)) {
          setData(json);
          setError(null);
        } else {
          setError("Data fetched has the wrong data type");
        }
      } catch (error) {
        setError(`${error} Could not fetch data`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, validation]);

  return { data, isLoading, error };
};
