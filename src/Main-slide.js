import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {
	AiOutlineHome,
	AiOutlineLinkedin,
	AiOutlineClose,
} from 'react-icons/ai';
import { FaLaptopCode, FaCodeBranch } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';
import { FiGithub } from 'react-icons/fi';

import mainPic from './img/self.jpg';

const Main = () => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = (e) =>
		setIsActive((current) => !current);

	return (
		<div className='first-page' id='home'>
			<button
				className={
					isActive
						? 'navbar-icon-pos nav-bar-icon'
						: 'nav-bar-icon'
				}
				onClick={handleClick}>
				{isActive ? <AiOutlineClose /> : <FaBars />}
			</button>
			<nav
				className={
					isActive ? 'nav-bar active-navbar' : 'nav-bar'
				}>
				<div className='nav-bar-links-container'>
					<ul>
						<li>
							<a href='#home'>
								<AiOutlineHome className='icon' />
								Home
							</a>
						</li>
						<li>
							<a href='#skill-page'>
								<FaCodeBranch className='icon' /> Skills
							</a>
						</li>
						<li>
							<a href='#project-page'>
								<FaLaptopCode className='icon' /> projects
							</a>
						</li>
						<li>
							<a href='#contact-page'>
								<GrContact className='icon' /> contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className='main-content-container'>
				<img className='image' src={mainPic} alt='self' />
				<div className='main-text-container'>
					<h3>Welcome, I am </h3>
					<h1>Nora Szabo</h1>
					<h2>
						I am a self-taught frontend developer applicant,
						and my passion is to become a successful
						frontend developer
					</h2>
					<div className='social-media'>
						<a href='https://www.linkedin.com/in/nora-szabo-934005230'>
							<AiOutlineLinkedin />
						</a>
						<a href='https://github.com/NoraTailor'>
							<FiGithub />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
