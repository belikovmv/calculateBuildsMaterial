import {
	NavLink,
} from "react-router-dom";

import './Nav.css';

function Nav() {
	return (
		<div className="nav-wrapper">
			<div className='nav-content'>
				<NavLink activeClassName='nav-wrapper-link-active' className='nav-wrapper-link' to="/main">Главная страница</NavLink>
				<NavLink activeClassName='nav-wrapper-link-active' className='nav-wrapper-link' to="/calc1">Рассчитать крышу</NavLink>
				<NavLink activeClassName='nav-wrapper-link-active' className='nav-wrapper-link' to="/calc2">Рассчитать каркас</NavLink>
				<NavLink activeClassName='nav-wrapper-link-active' className='nav-wrapper-link' to="/calc3">Рассчитать фундамент</NavLink>
				<NavLink activeClassName='nav-wrapper-link-active' className='nav-wrapper-link' to="/contact">Контакты</NavLink>
			</div>
		</div>
	);
}

export default Nav;
