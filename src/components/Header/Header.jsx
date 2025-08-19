import Logo from "../../assets/homeLogo.png";
function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="Logo de la Pagina" />
    </header>
  );
}
export default Header;
