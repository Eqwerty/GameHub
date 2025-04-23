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
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding="10px">
      {isLoading ? renderSkeletons() : renderGameCards(data)}
    </SimpleGrid>
  );
};

const renderGameCards = (games: Game[]) => {
  if (games.length === 0) {
    return <Text>No games found</Text>;
  }

  return games.map((game) => (
    <GameCardContainer key={game.id}>
      <GameCard game={game} />
    </GameCardContainer>
  ));
};

const renderSkeletons = () => {
  return Array.from({ length: 8 }, (_, index) => (
    <GameCardContainer key={index}>
      <GameCardSkeleton />
    </GameCardContainer>
  ));
};

export default GameGrid;
