const Footer = () => {
	return (
		<footer className="footer page__footer-margin">
			<p className="footer__copyright">
				&#169; {`${new Date().getFullYear()} Mesto Russia`}
			</p>
		</footer>
	);
};

export default Footer;

//<p className="footer__copyright">&#169; 2020 Mesto Russia</p>
