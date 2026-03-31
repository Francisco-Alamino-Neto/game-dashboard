import countryMap from "../../utils/countries";

function GameCard({ game }) {
  const country = countryMap[game.country];
  return (
    <div className="game-card win-box">

      <img
        src={`/flags/${game.country}.png`}
        alt={game.country}
        className="flag"
      />

      <div className="country-label">
        {country?.native || game.country}
      </div>

      <h3>{game.title}</h3>

      <img
        src={`/images/${game.image}`}
        alt={game.title}
        className="game-image"
      />
      
      <p className={`status ${game.status}`}>
        {game.status}
      </p>

      <p>Metacritic: ⭐ {game.rating}</p>
      <p>Comentário: {game.comment}</p>
    </div>
  );
}

export default GameCard;
