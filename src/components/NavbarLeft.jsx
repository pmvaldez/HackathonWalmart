import {Link} from 'react-router-dom'
import '../style/dashboard.css'
const NavbarLeft = () => {
    return (
      <div className="container-fluid" style={{width:'30%'}}>
      <div className="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="sidebar-sticky pt-3" style={{background:"#0076CD", marginTop:'33px', borderTopRightRadius:"21px"}}>
          <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link" href="/admin">
            <span data-feather="home">
            <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" color="black" xmlns="http://www.w3.org/2000/svg">
               <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
               <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            </svg>
            </span>
              Dashboard <span class="sr-only">(current)</span>
            </a>
          </li>
            <li class="nav-item">
              <a class="nav-link" href="/Alert">
                <span data-feather="file">
                  <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-bell-fill" color="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                  </svg>
                </span>
                Alertas
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/repositorio">
                <span data-feather="shopping-cart">
                    <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-journal-bookmark-fill" color="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                    <path fill-rule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"/>
                  </svg></span>
               <Link to="/repositorio" style={{color:'white'}}>Repositorio Normativas</Link> 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                <span data-feather="users">
                    <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-people-fill" color="black" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg></span>
                Usuarios
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                <span data-feather="bar-chart-2">
                    <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-fill" color="black" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
</svg></span>
                Mensajes
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                <span data-feather="layers">
                <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar2-event-fill" color="black" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 3.5c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1zM11.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
</svg>
                </span>
                Calendario
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                <span data-feather="layers">
                <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-question" color="black" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
</svg>
                </span>
                Ayuda
              </a>
            </li>
            </ul>
        </div>
      </nav>
      </div>
        </div>
    )
}
export default NavbarLeft