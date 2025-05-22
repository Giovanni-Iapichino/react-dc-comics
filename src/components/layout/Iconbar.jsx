export default function IconBar() {
  return (
    <section id="icon-bar">
      <div className="container">
        <ul>
          <li>
            <img
              src="src\assets\img\buy-comics-digital-comics.png"
              alt=""
              className="icon"
            />
            <a href="#">DIGITAL COMICS</a>
          </li>
          <li>
            <img
              src="src\assets\img\buy-comics-merchandise.png"
              alt=""
              className="icon"
            ></img>
            <a href="#">DC MERCHANDISE</a>
          </li>
          <li>
            <img
              src="src\assets\img\buy-comics-subscriptions.png"
              alt=""
              className="icon"
            />
            <a href="#">SUBSCRIPTION</a>
          </li>
          <li>
            <img
              src="src\assets\img\buy-comics-shop-locator.png"
              alt=""
              className="icon"
            />
            <a href="#">COMIC SHOP LOCATOR</a>
          </li>
          <li>
            <img
              src="src\assets\img\buy-dc-power-visa.svg"
              alt=""
              className="icon"
            />
            <a href="#">DC POWER VISA</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
