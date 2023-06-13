import Head from 'next/head';
import { createClient } from 'contentful';
import Header from '../components/NewHeader';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import BlogPostsList from '../components/BlogPostsList';
import Newsletter from '../components/Newsletter';
import { categories } from '../utils';

export default function IndexPage({ posts, articles }) {
	// console.log(articles);

	return (
		<div>
			<Head>
				<title>Satori Anime - Best Anime Blog Site</title>
				<meta name='description' content='Best Anime Blog Site' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />
			<Header />
			<Categories categories={categories} />
			<BlogPostsList posts={articles} />
			<Newsletter />

			<footer className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
				<div className='text-gray-400 text-sm text-center border-t py-8'>
					© 2023 - Satori Anime. All rights reserved.
				</div>
			</footer>
		</div>
	);
}

export async function getStaticProps(context) {
	const res = await fetch('https://dummyjson.com/posts?limit=9');
	const data = await res.json();

	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});
	const response = await client.getEntries({ content_type: 'posts' });

	return {
		props: { posts: data.posts, articles: response.items },
	};
}
