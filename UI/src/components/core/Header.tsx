import schoolLogo from '../../assets/images/Logo.png'

const Header = () => {
  return (
    <header className="header">
      <img src={schoolLogo} alt="JS GLOBAL ACADEMY : Student Council Election" className="logo" />
      <h1>JS GLOBAL ACADEMY : Student Council Election</h1>
    </header>
  );
};

export default Header;
