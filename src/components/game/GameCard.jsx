function GameCard({ game }) {
  return (
    <div className="game-card win-box">
      <h3>{game.title}</h3>
      <p>Status: {game.status}</p>
      <p>⭐ {game.rating}</p>
      <p>Comentário: {game.comment}</p>
    </div>
  );
}

export default GameCard;