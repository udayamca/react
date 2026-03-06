import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface DynamicHeadingProps {
  gameQuery: GameQuery;
}
const DynamicHeading = ({ gameQuery }: DynamicHeadingProps) => {
  let heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""}  Games`;
  return (
    <Heading as="h1" marginBottom={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default DynamicHeading;
