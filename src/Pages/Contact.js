import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import spitz from '../img/spitz.png';

import Popup from '../Components/Popup';
import styled from 'styled-components';
import Footer from '../Components/Footer';

const Contact = () => {
	const form = useRef();
	const [isSent, setIsSent] = useState(false);

	const [popupText, setPopupText] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();
		setIsSent(true);
		emailjs
			.sendForm(
				'service_07dwc1a',
				'contact_form',
				form.current,
				'gdfHmSLlpFwJv4k1C'
			)
			.then((result) => {
				console.log(result);
				if (result.status > 199 && result.status < 300) {
					setPopupText(
						'I got your email, I will answer you soon '
					);
				} else {
					setPopupText('Something went wrong');
				}
			});
	};

	const handleMouseEnter = () => {
		const bubble = document.querySelector('.bubble');
		bubble.classList.add('bubble-active');
		console.log(bubble);
	};

	const handleMouseLeave = () => {
		const bubble = document.querySelector('.bubble');
		bubble.classList.remove('bubble-active');
		console.log(bubble);
	};

	const handleClick = () => {
		const bubble = document.querySelector('.bubble');
		bubble.classList.toggle('bubble-active');
	};

	return (
		<Wrapper className='page last-page' id='contact-page'>
			<h1 className='title'>Contact me</h1>
			<div className='contact-container'>
				<div className='contact'>
					<form ref={form} onSubmit={sendEmail}>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							name='user_name'
							id='name'
							required
						/>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='user_email'
							id='email'
							required
						/>
						<label htmlFor='message'>Message</label>
						<textarea
							name='message'
							id='message'
							required
						/>
						<button
							type='submit'
							value='Send'
							onClick={() => setIsSent(true)}>
							Submit
						</button>
					</form>
				</div>
			</div>
			{popupText && (
				<Popup
					trigger={isSent}
					setTrigger={setIsSent}
					style={{ color: 'white' }}>
					<h3>{popupText}</h3>
				</Popup>
			)}
			<p className='bubble'>Wuf, wuf</p>
			<div
				className='dog'
				onMouseOver={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={handleClick}></div>
			<Footer />
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-top: 9rem;
	min-height: 80%;
	display: flex;
	flex-direction: column;

	.title {
		text-align: center;
		margin-bottom: 2rem;
		font-weight: bold;
	}

	.contact-container {
		background-color: var(--section-background);
		width: 70vw;
		column-gap: 3rem;
		height: 100%;
		max-width: 800px;
		text-align: center;
		margin: auto;
		background-color: antiquewhite;
		border-radius: 54px;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
		margin-bottom: 2rem;
		flex: 1;
	}

	form {
		display: flex;
		flex-direction: column;
		width: 80%;
		margin: auto;
	}

	label {
		margin-top: 2rem;
		font-size: 1rem;
	}

	input {
		height: 1.5rem;
	}

	input,
	textarea {
		border-radius: 12px;
		background-color: transparent;
		padding: 0.3rem;
		border: 1px solid black;
	}

	textarea {
		height: 3rem;
	}

	button {
		margin-top: 2rem;
		background-color: var(--text-anchor);
		color: white;
		border-radius: 24px;
		border: none;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.dog {
		background: url(${spitz}) no-repeat;
		background-size: 50px;
		width: 50px;
		height: 50px;
		position: relative;
		left: 70%;
	}

	.bubble {
		position: relative;
		width: 25%;
		text-align: center;
		background-color: #fff;
		visibility: hidden;
		border-radius: 30px;
		font-family: sans-serif;
		padding: 0.5rem;
		font-size: 1rem;
		left: 60%;
	}

	.bubble-active {
		visibility: visible;
	}

	.bubble::before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
	}

	.bubble::before {
		content: '';
		position: absolute;
		border-left: 10px solid transparent;
		border-right: 10px solid white;
		border-top: 10px solid white;
		border-bottom: 10px solid transparent;
		top: 2rem;
		right: 4rem;
	}

	@media screen and (min-width: 768px) {
		label {
			font-size: 1.3rem;
		}

		input {
			height: 2rem;
		}

		input:focus,
		textarea:focus {
			border: 2px solid var(--text-anchor);
			outline: none;
		}

		input:-webkit-autofill,
		input:-webkit-autofill:hover,
		input:-webkit-autofill:focus,
		input:-webkit-autofill:active {
			box-shadow: 0 0 0 30px var(--section-background) inset !important;
		}

		.dog {
			background-size: 80px;
			width: 80px;
			height: 80px;
			left: 90%;
		}

		.title {
			font-size: 2.5rem;
			margin-bottom: 5rem;
		}
		.bubble {
			width: 15%;
			left: 80%;
		}
		.bubble::before {
			content: '';
			top: 2rem;
			right: 3rem;
		}
	}
`;
export default Contact;
