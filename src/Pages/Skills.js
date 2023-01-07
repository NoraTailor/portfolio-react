import React from 'react';
import { SkillsData } from '../data';
import styled from 'styled-components';

const Skills = () => {
	return (
		<Wrapper className='page' id='skill-page'>
			<h1 className='title'>My Skills:</h1>

			<div className='skills-container'>
				{SkillsData.map((skill) => {
					return (
						<div className='skill' key={skill.id}>
							<div className='skill-img'>{skill.img}</div>
							<div className='skill-name'>{skill.name}</div>
						</div>
					);
				})}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-top: 7rem;
	min-height: 80vh;
	min-height: 50vh;

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
		width: 60%;
		justify-items: center;
		row-gap: 1rem;
		padding: 2rem;
		border-radius: 54px;
		column-gap: 1rem;
	}

	.skill {
		display: grid;
		justify-content: center;
		background-color: antiquewhite;
		border-radius: 24px;
		width: 70%;
		height: 90%;
		margin-top: 1rem;
		align-items: center;
		box-shadow: 1px 2px gray;
	}

	.skill-img {
		font-size: 3rem;
		margin-bottom: -1rem;
		width: 50px;
		height: 60px;
		margin: auto;
	}

	.skill-name {
		text-align: center;
	}

	@media screen and (min-width: 768px) {
		.skills-container {
			grid-template-columns: repeat(3, 1fr);
		}
		.title {
			font-size: 2.5rem;
			margin-bottom: 5rem;
		}

		.skill {
			width: 50%;
		}
	}
`;

export default Skills;
