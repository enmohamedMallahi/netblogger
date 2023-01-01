// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
	const response = await fetch('https://dummyjson.com/posts?limit=9');
	const data = await response.json();
	res.status(200).json({ posts: data.posts });
}
