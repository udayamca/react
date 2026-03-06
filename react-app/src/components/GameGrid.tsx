import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genres } from "@/hooks/useGenres";
import type { Platform } from "@/hooks/usePlatforms";
interface GameGridProps {
  selectedGenre: Genres | null;
  selectedPlatform: Platform | null;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: GameGridProps) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {error && <Text colorScheme="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCards game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
