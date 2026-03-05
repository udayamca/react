import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Spinner,
} from "@chakra-ui/react";

interface GenresListProps {
  onSelectGenre: (genres: any) => void;
}

const GenresList = ({ onSelectGenre }: GenresListProps) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List spacing={3}>
      {data.map((genres) => (
        <ListItem key={genres.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
              src={getCroppedImageUrl(genres.image_background)}
              alt={genres.name}
            />
            <Button
              variant="link"
              fontSize="lg"
              onClick={() => {
                onSelectGenre(genres);
              }}
            >
              {genres.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
