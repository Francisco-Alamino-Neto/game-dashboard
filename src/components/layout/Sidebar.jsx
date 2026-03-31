function Sidebar({ setFilter }) {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => setFilter("todos")}>Todos</li>
        <li onClick={() => setFilter("jogando")}>Jogando</li>
        <li onClick={() => setFilter("finalizado")}>Finalizados</li>
        <li onClick={() => setFilter("quero-jogar")}>Quero jogar</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
