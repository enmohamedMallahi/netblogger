import Link from 'next/link';

const ContactForm = () => {
	return (
		<div className='max-w-screen-2xl px-4 md:px-8 pb-8 mx-auto'>
			<div className='mb-10 md:mb-16'>
				<h2 className='text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6'>
					Get in touch
				</h2>

				<p className='max-w-screen-md text-gray-500 md:text-lg text-center mx-auto'>
					This is a section of some simple filler text, also known as
					placeholder text. It shares some characteristics of a real written
					text but is random or otherwise generated.
				</p>
			</div>

			<form className='max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto'>
				<div>
					<label
						for='first-name'
						className='inline-block text-gray-800 text-sm sm:text-base mb-2'
					>
						First name*
					</label>
					<input
						name='first-name'
						className='w-full bg-gray-50 text-gray-800 border focus:ring ring-green-300 rounded outline-none transition duration-100 px-3 py-2'
					/>
				</div>

				<div>
					<label
						for='last-name'
						className='inline-block text-gray-800 text-sm sm:text-base mb-2'
					>
						Last name*
					</label>
					<input
						name='last-name'
						className='w-full bg-gray-50 text-gray-800 border focus:ring ring-green-300 rounded outline-none transition duration-100 px-3 py-2'
					/>
				</div>

				<div className='sm:col-span-2'>
					<label
						for='email'
						className='inline-block text-gray-800 text-sm sm:text-base mb-2'
					>
						Email*
					</label>
					<input
						name='email'
						className='w-full bg-gray-50 text-gray-800 border focus:ring ring-green-300 rounded outline-none transition duration-100 px-3 py-2'
					/>
				</div>

				<div className='sm:col-span-2'>
					<label
						for='subject'
						className='inline-block text-gray-800 text-sm sm:text-base mb-2'
					>
						Subject*
					</label>
					<input
						name='subject'
						className='w-full bg-gray-50 text-gray-800 border focus:ring ring-green-300 rounded outline-none transition duration-100 px-3 py-2'
					/>
				</div>

				<div className='sm:col-span-2'>
					<label
						for='message'
						className='inline-block text-gray-800 text-sm sm:text-base mb-2'
					>
						Message*
					</label>
					<textarea
						name='message'
						className='w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-green-300 rounded outline-none transition duration-100 px-3 py-2'
					></textarea>
				</div>

				<div className='sm:col-span-2 flex justify-between items-center'>
					<button className='inline-block bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2'>
						Send
					</button>

					<span className='text-gray-500 text-sm'>*Required</span>
				</div>

				<p className='text-gray-400 text-xs'>
					By signing up to our newsletter you agree to our{' '}
					<Link
						href='p/privacy-policy'
						className='hover:text-green-500 active:text-green-600 underline transition duration-100'
					>
						Privacy Policy
					</Link>
					.
				</p>
			</form>
		</div>
	);
};

export default ContactForm;
