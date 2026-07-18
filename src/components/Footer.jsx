/*CSS*/
import "../css/Address.css";

function Footer() {
  return (
    <div className="Footer">
      {/*FOOTER*/}
      <footer>
        {/*ADDRESS*/}
        <address>
          <div className="address-container">
            <div className="address">
              <a href="mailto: youremail@live.com">youremail@live.com</a>
            </div>
            <div className="address">
              <a href="tel: +17027228654">702-722-8654</a>
            </div>
            <div className="address">
              <p>princessfloral90s</p>
            </div>{" "}
          </div>
        </address>
      </footer>
    </div>
  );
}

export default Footer;
