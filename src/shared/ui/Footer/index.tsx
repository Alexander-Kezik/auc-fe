import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import styles from './styles.module.scss';

const Footer: FC = () => {
	const createLinks = (links: string[]): JSX.Element[] => {
		return links.map(item => {
			return (
				<NavLink
					key={item}
					className={styles.Footer__wrapper__links__link}
					to={item.toLocaleLowerCase().replace(' ', '-')}
				>
					{item}
				</NavLink>
			);
		});
	};

	return (
		<footer className={styles.Footer}>
			<div className='container'>
				<div className={styles.Footer__grid}>
					<div className={styles.Footer__socials}>
						<FacebookOutlinedIcon className={styles.Footer__socials__item} />
						<TwitterIcon className={styles.Footer__socials__item} />
						<WhatsAppIcon className={styles.Footer__socials__item} />
						<TelegramIcon className={styles.Footer__socials__item} />
						<LinkedInIcon className={styles.Footer__socials__item} />
						<InstagramIcon className={styles.Footer__socials__item} />
					</div>
					<div className={styles.Footer__wrapper}>
						<div className={styles.Footer__wrapper__links}>
							<h4 className={styles.Footer__wrapper__links__header}>Pages</h4>
							{createLinks(['Profile', 'Lots', 'Cart'])}
						</div>
						<div className={styles.Footer__wrapper__links}>
							<h4 className={styles.Footer__wrapper__links__header}>About</h4>
							{createLinks(['About us', 'Achievements', 'Story'])}
						</div>
						<div className={styles.Footer__wrapper__links}>
							<h4 className={styles.Footer__wrapper__links__header}>Careers</h4>
							{createLinks(['Our jobs', 'Benefits', 'Offices'])}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
