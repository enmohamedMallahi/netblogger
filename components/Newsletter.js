import { useState } from 'react';
import Link from 'next/link';

const Newsletter = () => {
	const [email, setEmail] = useState('');
	const [alert, setAlert] = useState('');

	const subscribe = async (e) => {
		e.preventDefault();
		// console.log(email);
		const res = await fetch(`/api/subscribe?email=${email}`);
		const data = await res.json();
		if (data.success) {
			setAlert('A confirmation message is sent to you!');
		}
	};

	return (
		<div className='py-6 sm:py-8 lg:py-12 bg-green-500 text-white'>
			<div className='max-w-screen-2xl px-4 py-8 md:px-8 mx-auto'>
				<div className='flex flex-col items-center rounded-lg p-4 sm:p-8'>
					<div className='mb-4 sm:mb-8'>
						<h2 className=' text-xl sm:text-2xl lg:text-3xl font-bold text-center'>
							Get the <span className='text-yellow-400'>latest updates</span>
						</h2>
						<p className='text-gray-200 text-center'>
							Sign up in our newsletter
						</p>
					</div>

					{alert && (
						<div className='bg-green-300 text-slate-700 rounded p-2 my-3 items-center'>
							<p>{alert}</p>
							<button onClick={(e) => setAlert('')}>X</button>
						</div>
					)}

					<form
						onSubmit={subscribe}
						className='w-full max-w-md flex gap-2 mb-3 sm:mb-5'
					>
						<input
							required={true}
							placeholder='Email'
							className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-green-300 rounded-lg outline-none transition duration-100 px-3 py-2'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<button
							disabled={email ? false : true}
							className='inline-block bg-black hover:bg-gray-800 active:bg-gray-900 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-2'
						>
							Subscribe
						</button>
					</form>

					<p className='text-white text-xs text-center'>
						By signing up to our newsletter you agree to our{' '}
						<a
							href='#'
							className='hover:text-green-500 active:text-green-600 underline transition duration-100'
						>
							Term of Service
						</a>{' '}
						and{' '}
						<Link
							href='/p/privacy-policy'
							className='hover:text-green-500 active:text-green-600 underline transition duration-100'
						>
							Privacy Policy
						</Link>
						.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
