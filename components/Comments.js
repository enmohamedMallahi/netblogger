import { useState, useEffect } from 'react';

const Comments = ({ comments }) => {
	const [commentList, setCommentList] = useState(comments);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newComment = {
			name: e.target.name.value,
			text: e.target.text.value,
			date: new Date().toLocaleString(),
		};
		setCommentList([...commentList, newComment]);
		e.target.reset();
	};

	return (
		<div className='max-w-screen-2xl px-4 md:px-8 mx-auto rounded-lg p-4'>
			<h2 className='text-lg font-medium mb-4'>Comments</h2>
			<div className='mb-4'>
				{commentList.map((comment, i) => (
					<div key={i} className='border rounded p-2 mb-4'>
						<div className='text-gray-700 mb-2'>
							<span className='font-bold'>{comment.name}</span>
							<span className='text-sm'> - {comment.date}</span>
						</div>
						<p className='text-gray-600'>{comment.text}</p>
					</div>
				))}
			</div>
			<form onSubmit={handleSubmit}>
				<div className='mb-4'>
					<label htmlFor='name' className='block text-sm font-medium mb-2'>
						Name
					</label>
					<input
						type='text'
						name='name'
						id='name'
						className='border rounded-lg p-2 w-full'
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='text' className='block text-sm font-medium mb-2'>
						Comment
					</label>
					<textarea
						name='text'
						id='text'
						rows='4'
						className='border rounded-lg p-2 w-full'
					></textarea>
				</div>
				<button type='submit' className='bg-blue-500 text-white rounded-lg p-2'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Comments;
