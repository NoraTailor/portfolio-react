import React, { useState } from 'react';

import { FaRegCopyright } from 'react-icons/fa';

const Contact = () => {
	const [formStatus, setFormStatus] = useState('Send');

	const onSubmit = (e) => {
		e.preventDefault();
		setFormStatus('Submitting');
		const { name, email, message } = e.target.elements;
		let data = {
			name: name.value,
			email: email.value,
			message: message.value,
		};
	};
	return (
		<section className='page last-page' id='contact-page'>
			<div className='title'>Contact me</div>
			<div className='contact-container'>
				<div className='contact'>
					<form onSubmit={onSubmit}>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							name='name'
							id='name'
							required
						/>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='mail'
							id='email'
							required
						/>
						<label htmlFor='message'>Message</label>
						<textarea
							name='message'
							id='message'
							required
						/>
						<button type='submit'>Submit</button>
					</form>
				</div>
			</div>
			<div className='dog'></div>
			<footer>
				<FaRegCopyright />
				Nora Szabo <span>2022</span>
			</footer>
		</section>
	);
};

export default Contact;
