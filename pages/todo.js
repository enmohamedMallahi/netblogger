import React, { useState } from 'react';

function TodoApp() {
	// Declare a state variable called "todos"
	const [todos, setTodos] = useState([]);

	// Declare a state variable called "newTodo"
	const [newTodo, setNewTodo] = useState('');

	// Declare a state variable called "dueDate"
	const [dueDate, setDueDate] = useState('');

	// Declare a state variable called "editingIndex"
	const [editingIndex, setEditingIndex] = useState(-1);

	// Declare a state variable called "editedTodo"
	const [editedTodo, setEditedTodo] = useState('');

	// Add a todo when the form is submitted
	function handleSubmit(event) {
		event.preventDefault();
		if (editingIndex === -1) {
			setTodos([...todos, { todo: newTodo, dueDate }]);
			setNewTodo('');
			setDueDate('');
		} else {
			setTodos(
				todos.map((todo, i) => {
					if (i === editingIndex) {
						return { todo: editedTodo, dueDate: todo.dueDate };
					}
					return todo;
				})
			);
			setEditedTodo('');
			setEditingIndex(-1);
		}
	}

	function handleRemove(index) {
		setTodos(todos.filter((_, i) => i !== index));
	}

	// Edit a todo when the "edit" button is clicked
	function handleEdit(index) {
		const editedTodo = prompt('Enter the new todo:');
		if (editedTodo) {
			setTodos(
				todos.map((todo, i) => {
					if (i === index) {
						return { todo: editedTodo, dueDate: todo.dueDate };
					}
					return todo;
				})
			);
		}
	}

	return (
		<div className='w-10/12 py-8 mx-auto px-4'>
			<h1 className='text-4xl font-bold mb-4'>Todo App</h1>
			<form onSubmit={handleSubmit}>
				<input
					className='border rounded py-2 px-3 w-full mb-4'
					value={newTodo}
					onChange={(event) => setNewTodo(event.target.value)}
					required
				/>
				<input
					type='date'
					className='border rounded py-2 px-3 w-full mb-4'
					value={dueDate}
					onChange={(event) => setDueDate(event.target.value)}
					required
				/>

				<button
					type='submit'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
				>
					Add Todo
				</button>
			</form>
			<ul className='mt-4'>
				{todos.map((todo, index) => (
					<li key={index} className='flex items-center justify-between mb-4'>
						<div className='mr-4'>
							<p className='font-bold'>{todo.todo}</p>
							<p className='text-gray-500'>Due date: {todo.dueDate}</p>
						</div>
						<div className='flex gap-2'>
							<button
								type='button'
								onClick={() => handleEdit(index)}
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
							>
								E
							</button>
							<button
								type='button'
								onClick={() => handleRemove(index)}
								className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
							>
								X
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TodoApp;
