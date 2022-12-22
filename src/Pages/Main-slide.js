import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import mainPic from '../img/self.jpg';

const Main = () => {
	return (
		<Wrapper className='first-page' id='home'>
			<Navbar />
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
		</Wrapper>
	);
};

const Wrapper = styled.section`
	height: 100vh;
	display: flex;
	flex-direction: row;
	margin-left: -0.5rem;

	.main-content-container {
		margin-top: 4rem;
		width: 100%;
		height: 60%;
		margin: auto;
		font-weight: 100;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.image {
		flex: 1;
		padding: 1rem;
		width: 80%;
		border-radius: 24px;
		margin: auto;
		margin-bottom: 1rem;
	}

	.main-text-container {
		width: 90%;
		order: 2;
		line-height: 1.3rem;
		margin: auto;
		text-align: center;
		line-height: 2.2rem;
	}

	h3 {
		font-weight: 200;
		font-size: 1.5rem;
	}

	h1 {
		margin-top: 1.5rem;
	}
	h2 {
		font-weight: 100;
		margin: auto;
		margin-top: 2rem;
	}

	.main-text-container > h3 {
		width: 85%;
		margin: auto;
	}

	.social-media {
		margin-top: 2rem;
	}
	.social-media > a {
		margin-right: 2rem;
		margin-left: 2rem;
		font-size: 2.5rem;
		color: var(--text-color);
	}

	@media screen and (min-width: 768px) {
		.main-content-container {
			width: 60%;
			height: 60%;
			margin: auto;
			flex-direction: row;
		}

		.image {
			width: 25rem;
			margin-top: 0;
			margin-bottom: 0;
			margin: auto;
		}

		.main-text-container {
			width: 90%;
			text-align: left;
			margin-left: 2rem;
		}
		.main-text-container > h3 {
			margin: 0;
		}
		.social-media {
			display: flex;
			flex-direction: row;
			margin-left: 2rem;
		}
	}
`;

export default Main;
