import { loadIcon } from "../../composables/iconLoader";

function Header() {
  return (
    
      <header className="header">
        <div className="header__center">
          <img src={loadIcon['XM']} alt="logo xm" className="header__logo"/>
          <nav className="header__nav">
            <a href="/" className="header__link">XM Homepage</a>
            <a href="/support" className="header__link">Support</a>
          </nav>
        </div>
      </header>
    
  );
}

export default Header;
