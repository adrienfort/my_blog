import './Footer.css'
import instagram from './instagram.png'
import twitter from './twitter.png'
import mail from './mail.png'
import github from './github.png'
import linkedin from './linkedin.png'
import heart from './heart.png'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <a href="/"><img src={instagram} className="link-img" alt=""/></a>
        <a href="/"><img src={twitter} className="link-img" alt=""/></a>
        <a href="/"><img src={mail} className="link-img" alt=""/></a>
        <a href="/"><img src={github} className="link-img" alt=""/></a>
        <a href="/"><img src={linkedin} className="link-img" alt=""/></a>
      </div>
      <div className="footer-copyright">
          <h4>Made with </h4>
          <img className="link-img" src={heart} alt=""/>
          <h4>by PoC</h4>
      </div>
    </div>
  );
}

export default Footer;
