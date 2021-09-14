import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer className='footer'>
			<div>
				<ul className='icons'>
					<li>
						<a href='https://github.com/thaynarbo'>
							<FontAwesomeIcon
								icon={faGithub}
								color='#f0f8ffcc'
								rel='noreferrer'
							/>
						</a>
					</li>
					<li>
						<a
							href='https://www.instagram.com/thaynarbrn'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon
								size='lg'
								icon={faInstagram}
								color='#f0f8ffcc'
							/>
						</a>
					</li>
					<li>
						<a
							href='https://www.linkedin.com/in/thaynar-brand%C3%A3o/'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon
								size='lg'
								icon={faLinkedin}
								color='#f0f8ffcc'
							/>
						</a>
					</li>
				</ul>
			</div>
			<p>All rights reserved. &copy;</p>
		</footer>
	);
}

export default Footer;
