import Link from 'next/link';

const Categories = ({ categories }) => {
	return (
		<div class=' py-6 sm:py-8 lg:py-12'>
			<div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
				<div class='mb-10 md:mb-16'>
					<h2 class='text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6'>
						Categories
					</h2>
				</div>

				<div class='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8'>
					{categories.map((category) => (
						<Link
							href={`/category/${category.slug}`}
							class='group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative'
						>
							<img
								src={category.image}
								loading='lazy'
								alt='Photo by Minh Pham'
								class='w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200'
							/>

							<div class='bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none'></div>

							<span class='inline-block text-gray-200 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3'>
								{category.title}
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Categories;