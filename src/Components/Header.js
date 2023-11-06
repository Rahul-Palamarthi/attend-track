import { Link } from 'react-router-dom';
import './Styles/Header.css';

const Header = () => {
	return (
		<>
			<header className='header'>
				<div className='header-wrapper'>
					<p>
						<Link to={'/'} className='header-home-link'>
							At
						</Link>
					</p>
					<Link to={'/about'}>About</Link>
				</div>
			</header>
		</>
	);
};

export default Header;
