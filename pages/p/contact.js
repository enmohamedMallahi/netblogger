import Link from 'next/link';
import Navbar from '../../components/Navbar';

const ContactPage = () => {
	return (
		<div>
			<Navbar />
			<div class='max-w-screen-lg px-4 md:px-8 py-8 mx-auto'>
				<div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
					<div class='mb-10 md:mb-16'>
						<h2 class='text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6'>
							Get in touch
						</h2>

						<p class='max-w-screen-md text-gray-500 md:text-lg text-center mx-auto'>
							If you have any questions or feedback about our blog, please
							don&apos;t hesitate to reach out to us.
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
								class='w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
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
								class='w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
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
								class='w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
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
								class='w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
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
								class='w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
							></textarea>
						</div>

						<div class='sm:col-span-2 flex justify-between items-center'>
							<button className='hidden lg:inline-block bg-green-500 hover:bg-gray-300 focus-visible:ring ring-green-300 text-white active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2'>
								Send
							</button>

							<span class='text-gray-500 text-sm'>*Required</span>
						</div>

						<p class='text-gray-400 text-xs'>
							By signing up to our newsletter you agree to our{' '}
							<Link
								href='/p/privacy-policy'
								class='hover:text-indigo-500 active:text-indigo-600 underline transition duration-100'
							>
								Privacy Policy
							</Link>
							.
						</p>
					</form>
				</div>
			</div>

			<footer className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
				<div className='text-gray-400 text-sm text-center border-t py-8'>
					© 2023 - Satori Anime. All rights reserved.
				</div>
			</footer>
		</div>
	);
};

export default ContactPage;
