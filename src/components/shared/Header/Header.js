import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
function Header() {
	return (
		<header className='header'>
			<section className='section-center'>
				<ul className='list'>
					<img
						alt='placeholder'
						src='https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png'
					/>
					<div className='nav-links'>
						<Link to='/'>
							<li>Home</li>
						</Link>

						<Link to='/addTask'>
							<li>Add</li>
						</Link>
					</div>
				</ul>
			</section>
		</header>
	);
}

export default Header;
