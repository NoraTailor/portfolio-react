import {
	SiJavascript,
	SiSemanticuireact,
} from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { FiGithub } from 'react-icons/fi';
import { TbBrandVisualStudio } from 'react-icons/tb';
import clock from './img/clock picture.jpg';
import todo from './img/todo app.jpg';
import calculator from './img/calculator-pic.jpg';

export const SkillsData = [
	{
		id: 1,
		name: 'HTML',
		img: <AiFillHtml5 />,
	},
	{
		id: 2,
		name: 'CSS',
		img: <DiCss3 />,
	},

	{
		id: 3,
		name: 'GitHub',
		img: <FiGithub />,
	},
	{
		id: 4,
		name: 'React',
		img: <SiSemanticuireact />,
	},
	{
		id: 5,
		name: 'JavaScript',
		img: <SiJavascript />,
	},
	{
		id: 6,
		name: 'VS Code',
		img: <TbBrandVisualStudio />,
	},
];

export const ProjectsData = [
	{
		id: 1,
		name: 'clock',
		img: clock,
		onWebUrl: 'https://noratailor.github.io/clock/',
		githubLink: 'https://github.com/NoraTailor/calculator',
	},
	{
		id: 2,
		name: 'calculator',
		img: calculator,
		onWebUrl: 'https://noratailor.github.io/calculator',
		githubLink: 'https://github.com/NoraTailor/calculator',
	},
	{
		id: 3,
		name: 'todo app',
		img: todo,
		onWebUrl: 'https://noratailor.github.io/todoapp/',
		githubLink: 'https://github.com/NoraTailor/todoapp',
	},
];