import React from 'react';
import styled from 'styled-components';

function Popup(props) {
	return props.trigger ? (
		<Wrapper className='popup'>
			<div className='popup-inner'>
				<button
					className='close-btn'
					onClick={() => props.setTrigger(false)}
					style={{ cursor: 'pointer' }}>
					close
				</button>
				{props.children}
			</div>
		</Wrapper>
	) : (
		''
	);
}

const Wrapper = styled.div`
	.popup {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.2);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.popup-inner {
		position: relative;
		padding: 32px;
		width: 80%;
		max-width: 640px;
		background-color: var(--text-anchor);
		color: var(--main-background);
	}

	.popup .close-btn {
		position: absolute;
		top: 16px;
		right: 16px;
	}
`;

export default Popup;
