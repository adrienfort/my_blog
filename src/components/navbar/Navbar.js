import CreateArticlePopup from '../popup/CreateArticlePopup.js'
import logo from './logo.png'
import './Navbar.css'

function Navbar({articles, setArticles}) {
  return (
    <div className="navbar-container">
        <img src={logo} alt="" className="navbar-logo" />
        <div className="navbar-right">
            <CreateArticlePopup articles={articles} setArticles={setArticles}/>
            <img src="https://picsum.photos/70?grayscale" alt="" className="navbar-avatar" />
        </div>
    </div>
  );
}

export default Navbar;
