import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import styled from 'styled-components';

export default function Footer() {
	return (
		<Wrapper>
			<FaRegCopyright />
			Nora Szabo <span>2022</span>
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
	font-size: 1.3rem;

	span {
		font-style: italic;
		margin-left: 0.5rem;
	}
`;
