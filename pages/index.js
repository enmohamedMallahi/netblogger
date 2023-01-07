import Head from 'next/head';
import Link from 'next/link';
import { createClient } from 'contentful';
import Header from '../components/Header';
import Categories from '../components/Categories';
import BlogPostsList from '../components/BlogPostsList';
import Newsletter from '../components/Newsletter';

export default function IndexPage({ posts, articles }) {
	console.log(articles);
	const categories = [
		{
			title: 'General',
			image:
				'https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg',
			slug: 'general',
		},
		{
			title: 'AOT',
			image:
				'https://i.pinimg.com/564x/7a/0d/c2/7a0dc24f568b81a39ba1ce797f65d355.jpg',
			slug: 'aot',
		},
		{
			title: 'Dragon Ball',
			image:
				'https://wallpapers.com/images/featured/dragon-ball-z-3izrb2kvqsbl3tun.webp',
			slug: 'dragon-ball',
		},
	];

	return (
		<div>
			<Head>
				<title>Satori Anime - Best Anime Blog Site</title>
				<meta name='description' content='Best Anime Blog Site' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header full />
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
