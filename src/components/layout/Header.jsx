import Alert from "../ui/Alert";

export default function Header() {
  return (
    <header id="page-header">
      <Alert type="info">
        <p>Preferisco la Marvel ma alla fine Batman non è poi così male</p>
      </Alert>
      <div className="container">
        <div className="logo">
          <img src="src/assets/img/dc-logo.png"></img>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">CHARACTER</a>
            </li>
            <li className="active">
              <a href="#">COMICS</a>
            </li>
            <li>
              <a href="#">MOVIES</a>
            </li>
            <li>
              <a href="#">TV</a>
            </li>
            <li>
              <a href="#">GAMES</a>
            </li>
            <li>
              <a href="#"> COLLECTIBLES</a>
            </li>
            <li>
              <a href="#">VIDEOS</a>
            </li>
            <li>
              <a href="#">FANS</a>
            </li>
            <li>
              <a href="#">NEWS</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
