import './Contact.css';

function Contact() {
	return (
		<div className="contact-wrapper">
			<h1 className='feed-me'>Связаться с нами!</h1>
			<div className='feed-blocks'>
				<div className='feed-block'>
					<h2>Номер для связи:</h2>
					<p>+7777777777</p>
				</div>
				<div className='feed-block'>
					<h2>Email для связи:</h2>
					<p>test@test.com</p>
				</div>
			</div>
		</div>
	);
}

export default Contact;
