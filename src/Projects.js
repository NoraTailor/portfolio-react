import React from 'react';

import { ProjectsData } from './data';

const Projects = () => {
	return (
		<section className='page' id='project-page'>
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
			<div>And more comings...</div>
		</section>
	);
};

export default Projects;
