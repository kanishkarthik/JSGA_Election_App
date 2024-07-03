import schoolLogo from '../../assets/images/logo.jpg'

const Header = () => {
  return (
    <header className="header">
      <img src={schoolLogo} alt="JS GLOBAL ACADEMY : Student Council Election" className="logo" />
      <h1>JS GLOBAL ACADEMY <small>(A Senior Secondary School)</small>, Kallakurichi</h1>
    </header>
  );
};

export default Header;
