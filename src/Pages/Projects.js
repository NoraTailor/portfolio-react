import React from 'react';
import styled from 'styled-components';
import { ProjectsData } from '../data';
import { DiGithubFull } from 'react-icons/di';
import { BiSearchAlt } from 'react-icons/bi';

const Projects = () => {
	return (
		<Wrapper className='page' id='project-page'>
			<h1 className='title'>My Projects:</h1>
			<div className='project-container'>
				{ProjectsData.map((project) => {
					return (
						<section className='project' key={project.id}>
							<div className='project-img-container'>
								<img
									className='project-img'
									src={project.img}
									alt={project.name}></img>

								<a
									className='left link'
									href={project.onWebUrl}
									rel='noopener noreferrer'
									target='_blank'>
									<BiSearchAlt />
								</a>

								<a
									className='right link'
									href={project.githubLink}
									rel='noopener noreferrer'
									target='_blank'>
									<DiGithubFull />
								</a>
							</div>
							<h2 className='project-name'>
								{project.name}
							</h2>
							<h3>{project.used}</h3>
							<p>{project.text}</p>
						</section>
					);
				})}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-top: 7rem;
	min-height: 80vh;

	h3 {
		font-size: 1rem;
	}

	p {
		margin-top: 0.4rem;
		font-size: 0.8rem;
	}

	.left {
		right: 3rem;
		font-size: 3rem;
		bottom: 4.4rem;
	}
	.right {
		font-size: 4rem;
		left: 3rem;
		bottom: 4rem;
	}

	.link {
		position: relative;
	}

	.link:hover {
		color: var(--text-anchor);
	}

	.title {
		text-align: center;
		margin-bottom: 2rem;
		font-weight: bold;
	}

	.project-container {
		column-gap: 3rem;
		margin-top: 5rem;
		width: 80%;
		text-align: center;
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: 1fr;
		margin: auto;
		border-radius: 54px;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
		row-gap: 2.5rem;
	}

	.project {
		background-color: antiquewhite;
		height: 19rem;
		border-radius: 24px;
		padding: 1rem;
		box-shadow: 1px 2px gray;
	}

	.project-img {
		border-radius: 24px;
		margin-bottom: 1rem;
		margin: auto;
		width: 15rem;
		height: 9rem;
	}
	.project-img-container {
		height: 60%;
	}

	.project-name {
		text-transform: capitalize;
		font-size: 1.3rem;
	}

	div a {
		text-decoration: none;
		color: var(--navbar-background);
	}

	.urls {
		height: 15%;
	}

	@media screen and (min-width: 768px) {
		.project-container {
			padding-left: 2rem;
			padding-right: 2rem;
			grid-template-columns: repeat(3, 1fr);
			column-gap: 2rem;
		}

		.link {
			visibility: hidden;
		}
		.left {
			right: 3rem;
			font-size: 3rem;
			bottom: 5.5rem;
		}
		.right {
			font-size: 4rem;
			left: 3rem;
			bottom: 5rem;
		}

		.project-img-container:hover {
			.link {
				visibility: visible;
			}
		}

		.project-img {
			border-radius: 24px;
			margin-bottom: 1rem;
		}

		.title {
			font-size: 2.5rem;
			margin-bottom: 5rem;
		}
	}
`;
export default Projects;
