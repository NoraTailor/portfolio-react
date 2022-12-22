import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { FaLaptopCode, FaCodeBranch } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';
import {
	AiOutlineHome,
	AiOutlineClose,
} from 'react-icons/ai';

export default function Navbar() {
	const [isActive, setIsActive] = useState(false);

	const handleClick = (e) =>
		setIsActive((current) => !current);
	return (
		<Wrapper>
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
		</Wrapper>
	);
}

const Wrapper = styled.div`
	.nav-bar {
		height: 120vh;
		width: 50%;
		position: fixed;
		background-color: var(--navbar-background);
		transition: all 1s ease-in-out;
		transform: translateX(-100%);
		padding-top: 4rem;
	}

	.active-navbar {
		transform: translateX(0);
	}

	.icon {
		margin-right: 0.5rem;
	}

	.nav-bar-icon {
		position: fixed;
		left: 10%;
		top: 1rem;
		z-index: 5;
		height: 4rem;
		font-size: 2rem;
		border: none;
		background-color: transparent;
		transition: all 1s ease-in-out;
	}

	.navbar-icon-pos {
		left: 30%;
		top: 1rem;
		font-size: 2rem;
	}

	.nav-bar-links-container {
		display: flex;
		justify-content: center;
		margin-top: 5rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: stretch;
		text-transform: uppercase;
		height: 25rem;
	}

	li a {
		text-decoration: none;
		color: black;
		font-size: 1.1rem;
		font-weight: 500;
	}
	nav li {
		list-style-type: none;
	}

	@media screen and (min-width: 768px) {
		.nav-bar {
			width: 25%;
		}

		.nav-bar-links-container {
			margin-top: 3rem;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
			text-transform: uppercase;
			height: 60%;
		}

		.nav-bar-icon {
			left: 4%;
			font-size: 2rem;
		}

		.navbar-icon-pos {
			left: 20%;
			font-size: 2.2rem;
		}
	}
`;
