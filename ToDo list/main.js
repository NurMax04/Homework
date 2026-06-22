"use strict";

// {
// 	id: 1;
// 	text: "Todo";
// 	is_completed: false;
// }

const todoKeys = {
	id: "ID",
	text: "DESCRIPTION",
	is_completed: "is_completed",
};

let todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
	todos.reduce((maxId, todo) => Math.max(maxId, todoKeys.id), 0) + 1;

const createTodo = (todos, text) => {
	const newTodo = {
		[todoKeys.id]: getNewTodoId(todos),
		[todoKeys.text]: text,
		[todoKeys.is_completed]: false,
	};
	todos.push(newTodo);
	return newTodo;
};

const completeTodoById = (todos, todoId) => {
	const todo = todos.find(todo => todoKeys.id === todoId);
	if (!todo) {
		console.error(errTodoNotFound(todoId));
		return null;
	}
	todo.is_completed = !todo.is_completed;
	return todo;
};

const deleteTodoById = (todos, todoId) => {
	const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
	if (todoIndex === -1) {
		console.error(errTodoNotFound(todoId));
		return todos;
	}
	todos.splice(todoIndex, 1);
	return todos;
};

// const deleteTodoById = (todos, todoId) => {
// 	return todos.filter((todo) => todo[todoKeys.id] != todoId)
// }
