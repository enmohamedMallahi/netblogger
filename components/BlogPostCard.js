import Link from 'next/link';

const BlogPostCard = ({ post }) => {
	return (
		<Link
			href='#'
			class='group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative'
		>
			<img
				src='https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600'
				loading='lazy'
				alt='Photo by Magicle'
				class='w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200'
			/>

			<div class='bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none'></div>

			<div class='relative p-4 mt-auto'>
				<span class='block text-gray-200 text-sm'>March 15, 2021</span>
				<h2 class='text-white text-xl font-semibold transition duration-100 mb-2'>
					{post.title}
				</h2>

				<span class='text-green-300 font-semibold'>Read more</span>
			</div>
		</Link>
	);
};

export default BlogPostCard;
