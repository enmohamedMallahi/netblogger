import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Header from '../components/Header';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const BlogArticle = ({ post }) => {
	// const { title, content, author, date, url } = {
	// 	title: 'Test Blog Post',
	// 	content:
	// 		"It's using the Link component provided by nextjs to handle the routing of pages using the url prop. BlogArticle component receives multiple props like title, content, author, date, url and then make use of them inside the component. It's using the tailwind utility classes to style it. It will use a white background, rounded edges and some padding. It also uses text-lg class for title, text-gray-700 for content, text-gray-600 for author and date. Note that this is just a basic example to show how you might use Tailwind CSS in a Next.js component, and it doesn't include any logic for handling things like pagination or filtering.",
	// 	author: 'John Doe',
	// 	date: '12/02/2021',
	// 	url: 'https://google.com',
	// };

	const router = useRouter();

	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}

	const { title, body } = post.fields;
	const { createdAt } = post.sys;
	const postContent = documentToReactComponents(body);

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content='Best Anime Blog Site' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header
				post={{
					title,
					subtitle: 'subtitle here text dragon vall',
					imageUrl:
						'https://images.ctfassets.net/uu2lpbyalwwc/GCw1kJ5Z3yKIsJXS5uw8I/fea2d03389baea14de79843cf76d99a4/wp9136868.jpg',
				}}
			/>

			<div
				className='h-screen max-w-screen-2xl px-4 py-8 md:px-8 mx-auto'
				// id={`blog-article-${url}`}
			>
				<h2 className='text-4xl text-center font-bold mb-4'>
					{/* <Link href={url}> */}
					{/* <a href={url} className='text-green-500 hover:underline'>
						{title}
					</a> */}
					{/* </Link> */}
				</h2>
				{postContent}
			</div>

			<footer className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
				<div className='text-gray-400 text-sm text-center border-t py-8'>
					© 2023 - Satori Anime. All rights reserved.
				</div>
			</footer>
		</div>
	);
};

export default BlogArticle;

export async function getStaticProps(context) {
	const { items } = await client.getEntries({
		content_type: 'posts',
		'fields.slug[in]': context.params.slug,
	});

	if (!items.length) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: {
			post: items[0],
		},
	};
}

export async function getStaticPaths() {
	const res = await client.getEntries({ content_type: 'posts' });
	const data = res.items;
	console.log();

	return {
		paths: data.map((post) => ({ params: { slug: post.fields.slug } })),
		fallback: true,
	};
}
