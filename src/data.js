import {
	SiJavascript,
	SiSemanticuireact,
} from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { FiGithub } from 'react-icons/fi';
import { TbBrandVisualStudio } from 'react-icons/tb';
import clock from './img/clock picture.jpg';

import calculator from './img/calculator-pic.jpg';
import faq from './img/faq-img.jpg';
import quote from './img/quote-generator.jpg';

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
		name: 'React.js',
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
		used: 'HTML | CSS | JavaScript',
		onWebUrl: 'https://noratailor.github.io/clock/',
		githubLink: 'https://github.com/NoraTailor/calculator',
		text: 'It is a simple analog clock which shows the current time (CET) ',
	},
	{
		id: 2,
		name: 'calculator',
		img: calculator,
		used: 'HTML | CSS | JavaScript',
		onWebUrl: 'https://noratailor.github.io/calculator',
		githubLink: 'https://github.com/NoraTailor/calculator',
		text: 'A simple calculator',
	},
	{
		id: 3,
		name: 'FAQ page',
		img: faq,
		used: 'HTML | CSS | JavaScript',
		onWebUrl:
			'https://noratailor.github.io/faq-accordion-card-main/',
		githubLink:
			'https://github.com/NoraTailor/faq-accordion-card-main',
		text: 'frequently asked questions page, which shows the answer on click',
	},
	{
		id: 4,
		name: 'quote generator',
		img: quote,
		used: 'HTML | CSS | JavaScript | React.js',
		onWebUrl: 'https://quotes-generator-nsz.netlify.app/',
		githubLink:
			'https://github.com/NoraTailor/quote-generator',
		text: 'A quote generator app, which also suggests a number of generation based on your mood. ',
	},
];
