import './AppHeader.scss';
import Logo from '../../assets/Logo.svg';
import Hamburger from '../../assets/Hamburger.svg';

const AppHeader = () => {
  return (
    <header className="app-header">
      <a href="/">
        <img src={Logo} />
      </a>
      <nav>
        <ul>
          <li>Editorial</li>
          <li>Sports</li>
          <li>Creative</li>
          <li>Archive</li>
          <li>Account</li>
        </ul>
        <img src={Hamburger} />
      </nav>
    </header>
  );
};

export default AppHeader;
