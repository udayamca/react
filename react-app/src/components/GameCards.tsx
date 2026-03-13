import type { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformListIcons from "./PlatformListIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emojis from "./Emojis";

interface GameCardsProps {
  game: Game;
}

const GameCards = ({ game }: GameCardsProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformListIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="xl">
          {game.name}
          <Emojis rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
