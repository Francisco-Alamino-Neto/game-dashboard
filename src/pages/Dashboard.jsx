import { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import GameList from "../components/game/GameList";
import Modal from "../components/ui/Modal";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("todos");

  return (
    <div className="container">
      <div className="main">
        <Sidebar setFilter={setFilter} />

        <div className="content">
          <Header />

          <button className="win-button" onClick={() => setOpen(true)}>
            + Adicionar Jogo
          </button>

          <GameList filter={filter} />
        </div>
      </div>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Adicionar Jogo"
      >
        <p>Não há conteúdo para exibir.</p>
      </Modal>
    </div>
  );
}

export default Dashboard;
