export default function Example({ post }) {
	if (post) {
		return (
			<div className='max-w-7xl '>
				<div
					className='relative isolate overflow-hidden flex items-center justify-center  lg:pt-0 header text-white bg-gradient-to-br from-gray-700 to-gray-600'
					// style={{ backgroundImage: 'url(' + post.imageUrl + ')' }}
				>
					<img
						className='w-full h-full mix-blend-overlay object-cover absolute'
						src={post.imageUrl}
						alt=''
					/>
					<svg
						viewBox='0 0 1024 1024'
						className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
						aria-hidden='true'
					>
						<circle
							cx={512}
							cy={512}
							r={512}
							fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
							fillOpacity='0.7'
						/>
						<defs>
							<radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
								<stop stopColor='#37d737' />
								<stop offset={1} stopColor='#37d737' />
							</radialGradient>
						</defs>
					</svg>
					<div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:justify-center lg:py-32 lg:text-left z-30 px-4'>
						<h2 className='text-3xl font-bold tracking-tight  sm:text-4xl'>
							{post.title}
						</h2>
						<p className='mt-6 text-lg leading-8 text-white'>
							Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
							Malesuada adipiscing sagittis vel nulla.
						</p>
						<div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
							<a
								href='#blog'
								className='rounded-md bg-green-500 text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
							>
								Read It
							</a>
							<a href='#' className='text-sm font-semibold leading-6 '>
								Contact Us <span aria-hidden='true'>→</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className='mx-auto max-w-7xl '>
			<div className='relative isolate overflow-hidden px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 header'>
				<svg
					viewBox='0 0 1024 1024'
					className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
					aria-hidden='true'
				>
					<circle
						cx={512}
						cy={512}
						r={512}
						fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
						fillOpacity='0.7'
					/>
					<defs>
						<radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
							<stop stopColor='#37d737' />
							<stop offset={1} stopColor='#37d737' />
						</radialGradient>
					</defs>
				</svg>
				<div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:justify-center lg:py-32 lg:text-left'>
					<h2 className='text-3xl font-bold tracking-tight  sm:text-4xl'>
						Best Anime Blog Site
					</h2>
					<p className='mt-6 text-lg leading-8 text-gray-700'>
						Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
						Malesuada adipiscing sagittis vel nulla.
					</p>
					<div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
						<a
							href='#'
							className='rounded-md bg-green-500 text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
						>
							Check Articles
						</a>
						<a href='#' className='text-sm font-semibold leading-6 '>
							Contact Us <span aria-hidden='true'>→</span>
						</a>
					</div>
				</div>
				<div className='relative mt-16 h-80 lg:mt-8'>
					<img
						className='absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
						src='https://images.ctfassets.net/uu2lpbyalwwc/7BfETQttlbCe6a5fusKGYO/72f9735957b3e6996b30cdab5435d4c0/wallpaperflare.com_wallpaper.jpg'
						alt='App screenshot'
						width={1400}
						height={720}
					/>
				</div>
			</div>
		</div>
	);
}
