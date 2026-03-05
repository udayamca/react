import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchGamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
      const [error, setError] = useState("");
      const [isLoading, setIsLoading] = useState(false);
    
      useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        apiClient
          .get<FetchGamesResponse>("/games", {signal: controller.signal})
          .then((res) => {
            setIsLoading(false);
            setGames(res.data.results);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setIsLoading(false);
            setError(err.message);
            
          })
        //   .finally(() => setIsLoading(false)); finally is not working on strict mode because of react 18 double rendering
        return () => controller.abort();
      }, []);

      return { games, error, isLoading };
};

export default useGames;