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
							<div className='project-name'>
								{project.name}
							</div>
							<div>
								<img
									className='project-img'
									src={project.img}
									alt={project.name}
								/>
							</div>
							<a href={project.url}>Check it out!</a>
						</section>
					);
				})}
			</div>
			<div>And more comings...</div>
		</section>
	);
};

export default Projects;
