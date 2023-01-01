import BlogPostCard from './BlogPostCard';

const BlogPostsList = ({ posts }) => {
	return (
		<div id='blog' class='max-w-screen-2xl px-4 py-8 md:px-8 mx-auto'>
			<div class='mb-10 md:mb-16'>
				<h2 class='text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4'>
					Our Blog Posts
				</h2>
			</div>

			<div class='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8'>
				{posts.map((post) => (
					<BlogPostCard post={post} />
				))}
			</div>
		</div>
	);
};

export default BlogPostsList;
