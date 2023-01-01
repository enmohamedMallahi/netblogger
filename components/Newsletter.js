import React from 'react';

const Newsletter = () => {
	return (
		<div class='py-6 sm:py-8 lg:py-12'>
			<div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
				<div class='flex flex-col items-center bg-gray-100 rounded-lg p-4 sm:p-8'>
					<div class='mb-4 sm:mb-8'>
						<h2 class='text-green-500 text-xl sm:text-2xl lg:text-3xl font-bold text-center'>
							Get the latest updates
						</h2>
						<p class='text-gray-500 text-center'>Sign up for our newsletter</p>
					</div>

					<form class='w-full max-w-md flex gap-2 mb-3 sm:mb-5'>
						<input
							placeholder='Email'
							class='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-green-300 rounded-lg outline-none transition duration-100 px-3 py-2'
						/>

						<button class='inline-block bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-2'>
							Send
						</button>
					</form>

					<p class='text-gray-400 text-xs text-center'>
						By signing up to our newsletter you agree to our{' '}
						<a
							href='#'
							class='hover:text-green-500 active:text-green-600 underline transition duration-100'
						>
							Term of Service
						</a>{' '}
						and{' '}
						<a
							href='#'
							class='hover:text-green-500 active:text-green-600 underline transition duration-100'
						>
							Privacy Policy
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
