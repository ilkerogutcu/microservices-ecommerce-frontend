import { useEffect, useState } from "react";

import axios from "axios";

export function useApiService<T>(url: string): {
  response: T | null;
  error: Error | unknown;
} {
  const baseUrl = "http://localhost:5000";
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | unknown>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await axios(`${baseUrl}${url}`);
        setResponse(res.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return { response, error };
}
