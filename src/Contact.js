import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaRegCopyright } from 'react-icons/fa';
import Popup from './Popup';

const Contact = () => {
	const form = useRef();
	const [isSent, setIsSent] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_07dwc1a',
				'contact_form',
				form.current,
				'gdfHmSLlpFwJv4k1C'
			)
			.then((result) => {
				if (result.ok) {
					return (
						<Popup
							trigger={() => setIsSent(true)}
							setTrigger={setIsSent}>
							<h3>I got your email</h3>
						</Popup>
					);
				} else {
					return (
						<Popup
							trigger={isSent}
							setTrigger={setIsSent(false)}>
							<h3>
								Sorry there was a problem. Please try again
								later.
							</h3>
						</Popup>
					);
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
						<button type='submit' value='Send'>
							Submit
						</button>
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