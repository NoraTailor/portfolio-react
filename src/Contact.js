import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaRegCopyright } from 'react-icons/fa';
import Popup from './Popup';

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

	return (
		<section className='page last-page' id='contact-page'>
			<div className='title'>Contact me</div>
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

			<div className='dog'></div>
			<footer>
				<FaRegCopyright />
				Nora Szabo <span>2022</span>
			</footer>
		</section>
	);
};

export default Contact;
