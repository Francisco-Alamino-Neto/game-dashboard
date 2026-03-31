import GameCard from "./GameCard";
import games from "../../data/games";

function GameList({ filter }) {
  const filteredGames =
    filter === "todos"
      ? games
      : games.filter((game) => game.status === filter);

  return (
    <div className="game-list">
      {filteredGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameList;