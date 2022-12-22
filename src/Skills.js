import React from 'react';
import { SkillsData } from './data';
import styled from 'styled-components';

const Skills = () => {
	return (
		<Wrapper className='page' id='skill-page'>
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

	.skills-container {
		display: grid;
		grid-template-columns: 1fr, 1fr;
		margin: auto;
		grid-auto-rows: 100px;
		width: 50%;
		background-color: antiquewhite;
		padding: 2rem;
		border-radius: 54px;
		column-gap: 1rem;
	}

	.skill {
		max-width: 100%;
		display: grid;
		justify-content: center;
	}

	.skill:nth-child(5) .skill-img {
		margin-left: 1rem;
	}

	.skill-img {
		font-size: 3rem;
	}

	#skill-page {
		min-height: 50vh;
	}

	@media screen and (min-width: 768px) {
		.skills-container {
			grid-template-columns: repeat(3, 1fr);
		}
		.title {
			font-size: 2.5rem;
			margin-bottom: 5rem;
		}
	}
`;

export default Skills;
