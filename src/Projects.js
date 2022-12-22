import React from 'react';
import styled from 'styled-components';
import { ProjectsData } from './data';

const Projects = () => {
	return (
		<Wrapper className='page' id='project-page'>
			<div className='title'>My Projects:</div>
			<div className='project-container'>
				{ProjectsData.map((project) => {
					return (
						<section className='project' key={project.id}>
							<div>
								<img
									className='project-img'
									src={project.img}
									alt={project.name}
								/>
							</div>
							<div className='project-name'>
								{project.name}
							</div>
							<ul className='urls'>
								<li>
									<a href={project.onWebUrl}>
										Check it out!
									</a>
								</li>
								<li>
									<a href={project.githubLink}>
										Github Repo
									</a>
								</li>
							</ul>
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
		background-color: antiquewhite;
		border-radius: 54px;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
		row-gap: 2rem;
	}

	.project {
		height: 19rem;
	}

	.project-img {
		border-radius: 24px;
		margin-bottom: 1rem;
		margin: auto;
		width: 20rem;
		height: 12rem;
	}

	.project-name {
		text-transform: capitalize;
		font-size: 1.8rem;
	}

	section a {
		text-decoration: none;
		color: var(--text-anchor);
	}

	.urls {
		height: 15%;
	}

	.urls li {
		list-style-type: none;
		padding: 0.3rem;
		margin-left: -2rem;
	}

	.urls li:hover {
		text-decoration: underline;
	}

	@media screen and (min-width: 768px) {
		.project-container {
			padding-left: 2rem;
			padding-right: 2rem;
			grid-template-columns: repeat(3, 1fr);
			column-gap: 2rem;
		}

		.project-img {
			border-radius: 24px;
			margin-bottom: 1rem;
		}

		.urls li {
			list-style-type: none;
			margin-left: -2rem;
		}

		.title {
			font-size: 2.5rem;
			margin-bottom: 5rem;
		}
	}
`;
export default Projects;
