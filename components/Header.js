import React from 'react';
import Link from 'next/link';

const Header = ({ full }) => {
	if (full) {
		return (
			<div class='h-screen max-w-screen-2xl bg-green-100 px-4 md:px-8 mx-auto'>
				<header class='flex justify-between items-center border-b py-4 md:py-4 mb-8'>
					<Link
						href='/'
						class='inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2.5'
						aria-label='logo'
					>
						Satori Anime
					</Link>

					<nav class='hidden lg:flex lg:items-center gap-4'>
						<Link href='/' class='text-green-500 text-sm font-semibold'>
							Home
						</Link>

						<Link
							href='/'
							class='text-gray-600 hover:text-green-500 active:text-green-700 text-sm font-semibold transition duration-100'
						>
							About
						</Link>
						<Link
							href='#'
							class='hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-green-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2'
						>
							Contact us
						</Link>
					</nav>

					<button
						type='button'
						class='inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-green-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-6 w-6'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fill-rule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clip-rule='evenodd'
							/>
						</svg>
						Menu
					</button>
				</header>

				<section class='flex flex-col items-center py-16 md:py-0'>
					<div class='max-w-xl flex flex-col items-center text-center pt-8 lg:pt-32 pb-16 lg:pb-48'>
						<h1 class='text-black-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
							Revolutionary way to build the web
						</h1>
						<p className='text-gray-500 mb-4'>
							This is a section of some simple filler text, also known as
							placeholder text.
						</p>

						<div class='w-full flex flex-col sm:flex-row sm:justify-center gap-2.5'>
							<a
								href='#blog'
								class='inline-block bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2'
							>
								Start reading
							</a>

							<a
								href='#'
								class='inline-block bg-gray-300 hover:opacity-80 focus-visible:ring ring-green-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2'
							>
								Contact us
							</a>
						</div>
					</div>
				</section>
			</div>
		);
	}

	return (
		<header class='flex justify-between items-center border-b py-4 md:py-4 mb-8  px-4 md:px-8'>
			<Link
				href='/'
				class='inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2.5'
				aria-label='logo'
			>
				Satori Anime
			</Link>

			<nav class='hidden lg:flex lg:items-center gap-4'>
				<Link href='/' class='text-green-500 text-sm font-semibold'>
					Home
				</Link>

				<Link
					href='/'
					class='text-gray-600 hover:text-green-500 active:text-green-700 text-sm font-semibold transition duration-100'
				>
					About
				</Link>
				<Link
					href='#'
					class='hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-green-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2'
				>
					Contact us
				</Link>
			</nav>

			<button
				type='button'
				class='inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-green-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					class='h-6 w-6'
					viewBox='0 0 20 20'
					fill='currentColor'
				>
					<path
						fill-rule='evenodd'
						d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
						clip-rule='evenodd'
					/>
				</svg>
				Menu
			</button>
		</header>
	);
};

export default Header;
