import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Header from '../../components/Header';
import Newsletter from '../../components/Newsletter';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const BlogArticle = ({ post }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}

	const { title, body, subtitle, description, keywords } = post.fields;
	const { createdAt } = post.sys;
	const postContent = documentToReactComponents(body);
	const imageUrl = post.fields.thumbnail.fields.file.url;

	let keywordsText = '';
	keywords.forEach((keyword) => {
		keywordsText += keyword + ',';
	});

	// console.log(keywordsText);

	console.log(post);

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywordsText} />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header
				post={{
					title,
					subtitle,
					imageUrl,
				}}
			/>

			<div
				id='blog'
				className='max-w-4xl px-4 py-8 md:px-8 mx-auto'
				// id={`blog-article-${url}`}
			>
				<article>
					<h1 className='sr-only'>{title}</h1>

					<div>{postContent}</div>
				</article>
			</div>

			<Newsletter />

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
