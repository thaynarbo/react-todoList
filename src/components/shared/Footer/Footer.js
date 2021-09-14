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
						<a href=''>
							<FontAwesomeIcon
								icon={faGithub}
								color='#f0f8ffcc'
							/>
						</a>
					</li>
					<li>
						<a href='' target='_blank'>
							<FontAwesomeIcon
								icon={faInstagram}
								size='lg '
								color='#f0f8ffcc'
							/>
						</a>
					</li>
					<li>
						<a href='' target='_blank'>
							<FontAwesomeIcon
								icon={faLinkedin}
								size='lg'
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
