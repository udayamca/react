import { useEffect, useState } from 'react'
import apiClient from '@/services/api-client';

interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

interface RequestConfig extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

const useData = <T>(endpoint: string, requestConfig?: RequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint,  {signal: controller.signal, ...requestConfig})
      .then((res) => {
        setIsLoading(false);
        setData(res.data.results);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setIsLoading(false);
        setError(err.message);
      })
    //   .finally(() => setIsLoading(false)); finally is not working on strict mode because of react 18 double rendering
    return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
}

export default useData