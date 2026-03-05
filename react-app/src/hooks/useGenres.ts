import { useEffect, useState } from 'react'
import apiClient from '@/services/api-client';
import { CanceledError } from 'axios';

export interface Genres {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Genres[];
}



const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
        const [error, setError] = useState("");
        const [isLoading, setIsLoading] = useState(false);
      
        useEffect(() => {
          const controller = new AbortController();
          setIsLoading(true);
          apiClient
            .get<FetchGenresResponse>("/genres", {signal: controller.signal})
            .then((res) => {
              setIsLoading(false);
              setGenres(res.data.results);
            })
            .catch((err) => {
              if (err instanceof CanceledError) return;
              setIsLoading(false);
              setError(err.message);
              
            })
          //   .finally(() => setIsLoading(false)); finally is not working on strict mode because of react 18 double rendering
          return () => controller.abort();
        }, []);
  
        return { genres, error, isLoading };
}

export default useGenres