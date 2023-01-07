import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import styled from 'styled-components';

export default function Footer() {
	return (
		<Wrapper>
			<FaRegCopyright className='icon' />
			<h3>
				Nora Szabo <span>{new Date().getFullYear()}</span>
			</h3>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	background-color: var(--text-anchor);
	height: 5rem;
	color: white;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-weight: 0;

	.icon {
		font-size: 0.8rem;
	}

	h3 {
		font-size: 0.9rem;
	}

	span {
		font-style: italic;
	}
`;
