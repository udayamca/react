import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import type { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatforms";
function App() {
  const [selectedGenres, setSelectedGenres] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList
            selectedGenre={selectedGenres}
            onSelectGenre={setSelectedGenres}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid
          selectedGenre={selectedGenres}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
