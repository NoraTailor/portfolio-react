import React from 'react';
import { SkillsData } from './data';

const Skills = () => {
	return (
		<section className='page' id='skill-page'>
			<div className='title'>My Skills:</div>
			<div className='skills-container'>
				{SkillsData.map((skill) => {
					return (
						<section className='skill' key={skill.id}>
							<div className='skill-name'>{skill.name}</div>
							<div className='skill-img'>{skill.img}</div>
						</section>
					);
				})}
			</div>
		</section>
	);
};

export default Skills;
