import Header from '../components/Header';

const NotFound = () => {
	return (
		<div>
			<header class='flex justify-between items-center border-b py-4 md:py-4 mb-8  px-4 md:px-8'>
				<a
					href='/'
					class='inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2.5'
					aria-label='logo'
				>
					Satori Anime
				</a>

				<nav class='hidden lg:flex lg:items-center gap-4'>
					<a href='#' class='text-green-500 text-sm font-semibold'>
						Home
					</a>
					<a
						href='#'
						class='text-gray-600 hover:text-green-500 active:text-green-700 text-sm font-semibold transition duration-100'
					>
						Features
					</a>
					<a
						href='#'
						class='text-gray-600 hover:text-green-500 active:text-green-700 text-sm font-semibold transition duration-100'
					>
						Pricing
					</a>
					<a
						href='#'
						class='text-gray-600 hover:text-green-500 active:text-green-700 text-sm font-semibold transition duration-100'
					>
						About
					</a>
					<a
						href='#'
						class='hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-green-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2'
					>
						Contact us
					</a>
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
			<div class='max-w-screen-lg px-4 md:px-8 mx-auto'>
				<div class='grid sm:grid-cols-2 gap-8'>
					<div class='flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32'>
						<p class='text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4'>
							Error 404
						</p>
						<h1 class='text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2'>
							Page not found
						</h1>

						<p class='text-gray-500 md:text-lg text-center sm:text-left mb-8'>
							The page you’re looking for doesn’t exist.
						</p>

						<a
							href='#'
							class='inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2'
						>
							Go home
						</a>
					</div>

					<div class='h-80 md:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg relative'>
						<img
							src='https://images.unsplash.com/photo-1590642916589-592bca10dfbf?auto=format&q=75&fit=crop&w=600'
							loading='lazy'
							alt='Photo by @heydevn'
							class='w-full h-full object-cover object-center absolute inset-0'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
