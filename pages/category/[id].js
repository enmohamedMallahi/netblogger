import Head from 'next/head';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import Header from '../../components/Header';
import Newsletter from '../../components/Newsletter';
import BlogPostsList from '../../components/BlogPostsList';
import { categories } from '../../utils';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const CategoryPage = ({ posts, headerData }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<Head>
				<title>Satori Anime</title>
				<meta name='description' content='Best Anime Blog Site' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header
				post={{
					title: headerData.title,
					subtitle: '',
					imageUrl: headerData.image,
				}}
			/>

			<BlogPostsList posts={posts} />

			<Newsletter />

			<footer className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
				<div className='text-gray-400 text-sm text-center border-t py-8'>
					© 2023 - Satori Anime. All rights reserved.
				</div>
			</footer>
		</div>
	);
};

export default CategoryPage;

export async function getStaticProps(context) {
	const { items } = await client.getEntries({
		content_type: 'posts',
	});

	const filteredPosts = items.filter((post) => {
		const postTags = post.metadata.tags;
		if (postTags[0].sys.id === context.params.id) {
			return post;
		}
	});

	return {
		props: {
			posts: filteredPosts,
			headerData: categories.filter((ctg) => ctg.id === context.params.id)[0],
		},
	};
}

export async function getStaticPaths() {
	const res = await client.getTags();
	const data = res.items;
	console.log(data.map((tag) => ({ params: { id: tag.sys.id } })));

	return {
		paths: data.map((tag) => ({ params: { id: tag.sys.id } })),
		fallback: true,
	};
}
