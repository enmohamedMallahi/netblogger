import Link from 'next/link';

const ContactForm = () => {
	return (
		<div class='max-w-screen-2xl px-4 md:px-8 pb-8 mx-auto'>
			<div class='mb-10 md:mb-16'>
				<h2 class='text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6'>
					Get in touch
				</h2>

				<p class='max-w-screen-md text-gray-500 md:text-lg text-center mx-auto'>
					This is a section of some simple filler text, also known as
					placeholder text. It shares some characteristics of a real written
					text but is random or otherwise generated.
				</p>
			</div>

			<form class='max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto'>
				<div>
					<label
						for='first-name'
						class='inline-block text-gray-800 text-sm sm:text-base mb-2'
					>
						First name*
					</label>
					<input
						name='first-name'
						class='w-full bg-gray-50 text-gray-800 border focus:ring ring-green-300 rounded outline-none transition duration-100 px-3 py-2'
					/>
				</div>

				<div>
					<label
						for='last-name'
						class='inline-block text-gray-800 text-sm sm:text-base mb-2'
					>
						Last name*
					</label>
					<input
						name='last-name'
						class='w-full bg-gray-50 text-gray-800 border focus:ring ring-green-300 rounded outline-none transition duration-100 px-3 py-2'
					/>
				</div>

				<div class='sm:col-span-2'>
					<label
						for='email'
						class='inline-block text-gray-800 text-sm sm:text-base mb-2'
					>
						Email*
					</label>
					<input
						name='email'
						class='w-full bg-gray-50 text-gray-800 border focus:ring ring-green-300 rounded outline-none transition duration-100 px-3 py-2'
					/>
				</div>

				<div class='sm:col-span-2'>
					<label
						for='subject'
						class='inline-block text-gray-800 text-sm sm:text-base mb-2'
					>
						Subject*
					</label>
					<input
						name='subject'
						class='w-full bg-gray-50 text-gray-800 border focus:ring ring-green-300 rounded outline-none transition duration-100 px-3 py-2'
					/>
				</div>

				<div class='sm:col-span-2'>
					<label
						for='message'
						class='inline-block text-gray-800 text-sm sm:text-base mb-2'
					>
						Message*
					</label>
					<textarea
						name='message'
						class='w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-green-300 rounded outline-none transition duration-100 px-3 py-2'
					></textarea>
				</div>

				<div class='sm:col-span-2 flex justify-between items-center'>
					<button class='inline-block bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2'>
						Send
					</button>

					<span class='text-gray-500 text-sm'>*Required</span>
				</div>

				<p class='text-gray-400 text-xs'>
					By signing up to our newsletter you agree to our{' '}
					<Link
						href='p/privacy-policy'
						class='hover:text-green-500 active:text-green-600 underline transition duration-100'
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
