import React from 'react';
import Link from 'next/link';

const Header = ({ full, post }) => {
	const pages = [
		{ url: '/', title: 'Home' },
		{ url: '/about', title: 'About' },
		{ url: '/p/contact', title: 'Contact us' },
	];
	if (full) {
		return (
			<div className='h-screen max-w-screen-2xl bg-green-100 px-4 md:px-8 mx-auto'>
				<header className='flex justify-between items-center border-b py-4 md:py-4 mb-8'>
					<Link
						href='/'
						className='inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2.5'
						aria-label='logo'
					>
						Satori Anime
					</Link>

					<nav className='hidden lg:flex lg:items-center gap-4'>
						{pages.map((page) => (
							<Link
								href={page.url}
								className='text-green-500 text-sm font-semibold'
							>
								{page.title}
							</Link>
						))}
					</nav>

					<button
						type='button'
						className='inline-flex text-black items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-green-300 text-gray-200 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clipRule='evenodd'
							/>
						</svg>
						Menu
					</button>
				</header>

				<section className='flex flex-col items-center py-16 md:py-0'>
					<div className='max-w-xl flex flex-col items-center text-center pt-8 lg:pt-32 pb-16 lg:pb-48'>
						<h1 className='text-black-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
							Unleashing the power of anime, one post at a time
						</h1>
						<p className='text-gray-500 mb-4'>
							Join the anime community and never miss a beat
						</p>

						<div className='w-full flex flex-col sm:flex-row sm:justify-center gap-2.5'>
							<a
								href='#blog'
								className='inline-block bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2'
							>
								Start reading
							</a>

							<Link
								href='/p/contact'
								className='inline-block bg-gray-300 hover:opacity-80 focus-visible:ring ring-green-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2'
							>
								Contact us
							</Link>
						</div>
					</div>
				</section>
			</div>
		);
	}

	if (post) {
		return (
			<div className='min-h-screen max-w-screen-2xl mx-auto relative bg-gradient-to-br from-gray-700 to-gray-600'>
				<img
					className='w-full h-full mix-blend-overlay object-cover absolute'
					src={post.imageUrl}
					alt=''
				/>
				<header className='flex justify-between items-center border-b py-4 md:py-4 mb-8 px-4 md:px-8'>
					<Link
						href='/'
						className=' drop-shadow-lg inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2.5 text-white'
						aria-label='logo'
					>
						Satori Anime
					</Link>

					<nav className='hidden lg:flex lg:items-center gap-4 z-20'>
						<Link href='/' className='text-green-500 text-sm font-semibold'>
							Home
						</Link>

						<Link
							href='/'
							className='text-gray-200 hover:text-green-500 active:text-green-700 text-sm font-semibold transition duration-100'
						>
							About
						</Link>
						<Link
							href='/p/contact'
							className='hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-green-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2'
						>
							Contact us
						</Link>
					</nav>

					<button
						type='button'
						className='inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-green-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clipRule='evenodd'
							/>
						</svg>
						Menu
					</button>
				</header>

				<section className='flex flex-col items-center py-16 md:py-0 px-4 md:px-8 mt-24'>
					<div className='max-w-xl flex flex-col items-center text-center pt-8 lg:pt-32 pb-16 lg:pb-48'>
						<h1 className='drop-shadow-2xl shadow-black text-black-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white'>
							{post.title}
						</h1>
						<p className='drop-shadow-xl shadow-black text-gray-100 mb-4'>
							{post.subtitle}
						</p>

						<div className='w-full flex flex-col sm:flex-row sm:justify-center gap-2.55 z-20'>
							<a
								href='#blog'
								className='inline-block bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2'
							>
								Read it now
							</a>
						</div>
					</div>
				</section>
			</div>
		);
	}

	return (
		<header className='flex justify-between items-center border-b py-4 md:py-4 px-4 md:px-8'>
			<Link
				href='/'
				className='inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2.5'
				aria-label='logo'
			>
				Satori Anime
			</Link>

			<nav className='hidden lg:flex lg:items-center gap-4'>
				<Link href='/' className='text-green-500 text-sm font-semibold'>
					Home
				</Link>

				<Link
					href='/'
					className='text-gray-200 hover:text-green-500 active:text-green-700 text-sm font-semibold transition duration-100'
				>
					About
				</Link>
				<Link
					href='/p/contact'
					className='hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-green-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2'
				>
					Contact us
				</Link>
			</nav>

			<button
				type='button'
				className='inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-green-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					viewBox='0 0 20 20'
					fill='currentColor'
				>
					<path
						fillRule='evenodd'
						d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
						clipRule='evenodd'
					/>
				</svg>
				Menu
			</button>
		</header>
	);
};

export default Header;
