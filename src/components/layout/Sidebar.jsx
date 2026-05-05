function Sidebar({ setFilter }) {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => setFilter("todos")}>Todos</li>
        <li onClick={() => setFilter("jogando")}>Jogando</li>
        <li onClick={() => setFilter("finalizado")}>Finalizados</li>
        <li onClick={() => setFilter("quero-jogar")}>Quero jogar</li>
      </ul>

      <div className="sidebar-marquee">
        <div className="sidebar-track">
          <a href="https://github.com/Francisco-Alamino-Neto" target="_blank">
            <img src="/images/githubLogo.png" alt="" />
            GitHub
          </a>
          <a href="#">Games</a>
          <a href="#">Portfolio</a>

          <a href="https://github.com/Francisco-Alamino-Neto" target="_blank">
            <img src="/images/githubLogo.png" alt="" />
            GitHub
          </a>
          <a href="#">Games</a>
        </div>
      </div>

      <div className="sidebar-gif">
        <img src="/images/lain.gif" alt="Lain GIF" />
      </div>
    </aside>
  );
}

export default Sidebar;
