import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import GameList from "../components/game/GameList";

function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Header />
        <GameList />
      </div>
    </div>
  );
}

export default Dashboard;