import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={3}
        padding="10px"
      >
        {isLoading ? getGameCardSkeletons() : getGameCards(data)}
      </SimpleGrid>
    </>
  );
};

const getGameCards = (games: Game[]) => {
  if (games.length === 0) {
    return <Text>No games found</Text>;
  }

  return games.map((game) => (
    <GameCardContainer key={game.id}>
      <GameCard game={game} />
    </GameCardContainer>
  ));
};

const getGameCardSkeletons = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return skeletons.map((skeleton) => (
    <GameCardContainer key={skeleton}>
      <GameCardSkeleton />
    </GameCardContainer>
  ));
};

export default GameGrid;
