import Link from 'next/link';

const BlogPostCard = ({ post }) => {
	const { title, slug } = post.fields;
	const imageUrl = post.fields.thumbnail.fields.file.url;
	const { createdAt } = post.sys;

	return (
		<Link
			href={`/post/${slug}`}
			className='group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative'
		>
			<img
				src={'https:' + imageUrl}
				loading='lazy'
				alt='Photo by Magicle'
				className='w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200'
			/>

			<div className='bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none'></div>

			<div className='relative p-4 mt-auto'>
				<span className='block text-gray-200 text-sm'>
					{new Date(createdAt).toDateString()}
				</span>
				<h2 className='text-white text-xl font-semibold transition duration-100 mb-2'>
					{title}
				</h2>

				<span className='text-green-300 font-semibold'>Read more</span>
			</div>
		</Link>
	);
};

export default BlogPostCard;
