import useGenres, { type Genres } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Spinner,
  Heading,
} from "@chakra-ui/react";

interface GenresListProps {
  onSelectGenre: (genres: Genres) => void;
  selectedGenre: Genres | null;
}

const GenresList = ({ onSelectGenre, selectedGenre }: GenresListProps) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List spacing={3}>
        {data.map((genres) => (
          <ListItem key={genres.id} paddingY="5px">
            <HStack>
              <Image
                textAlign="left"
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(genres.image_background)}
                alt={genres.name}
              />
              <Button
                whiteSpace="normal"
                textAlign={"left"}
                variant="link"
                wordBreak="break-word"
                fontWeight={genres.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize={genres.id === selectedGenre?.id ? "xl" : "lg"}
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
    </>
  );
};

export default GenresList;
