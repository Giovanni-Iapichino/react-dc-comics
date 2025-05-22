export default function Footer() {
  return (
    <footer id="page-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-1-7">
              <h3>DC COMICS</h3>
              <ul>
                <li>Characters</li>
                <li>Comics</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Games</li>
                <li>Videos</li>
                <li>News</li>
              </ul>

              <h3>SHOP</h3>
              <ul>
                <li>Shop DC</li>
                <li>Shop DC Collectibles</li>
              </ul>
            </div>

            <div className="col-1-7">
              <h3>DC</h3>
              <ul>
                <li>Terms Of Use</li>
                <li>Privacy Policy(New)</li>
                <li>Ad Choices</li>
                <li>Advertising</li>
                <li>Jobs</li>
                <li>Subscriptions</li>
                <li>Talent Workshops</li>
                <li>CPSC Certificates</li>
                <li>Ratings</li>
                <li>Shop Help</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="col-1-7">
              <h3>SITES</h3>
              <ul>
                <li>DC</li>
                <li>MAD Magazine</li>
                <li>DC Kids</li>
                <li>DC Universe</li>
                <li>DC Power Visa</li>
              </ul>
            </div>
            <img
              className="big-logo"
              src="src\assets\img\dc-logo-bg.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div>
              <button className="sign-up">SIGN-UP NOW!</button>
            </div>

            <div className="follow">
              <h3>FOLLOW US</h3>
              <img src="src\assets\img\footer-facebook.png" alt="" />
              <img src="src\assets\img\footer-twitter.png" alt="" />
              <img src="src\assets\img\footer-youtube.png" alt="" />
              <img src="src\assets\img\footer-pinterest.png" alt="" />
              <img src="src\assets\img\footer-periscope.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
