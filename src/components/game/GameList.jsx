import GameCard from "./GameCard";
import games from "../../data/games";

function GameList() {
  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameList;