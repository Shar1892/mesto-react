import logo from "../images/logo.svg";

const Header = () => {
	return (
		<header className="header page__header-margin">
			<img src={logo} alt="Логотип Mesto" className="header__logo" />
		</header>
	);
};

export default Header;
