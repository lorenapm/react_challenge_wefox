import "../stylesheet/footer.css"
import logo from "../images/wefox.jpg";

function Footer() {
    return (
        <div className="footer">
          <a href="https://www.wefox.com/en-de" target="_blank">
              <img className="footer__logo" src={logo} alt="logo wefox"/>
          </a>
          <small>© Lorena Pérez Martínez 2021</small>
        </div>
    )
}

export default Footer
