"use strict";

const todoKeys = {
	id: "id",
	text: "text",
	is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
	todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

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
	const todo = todos.find(todo => todo[todoKeys.id] === todoId);

	if (!todo) {
		console.error(errTodoNotFound(todoId));
		return null;
	}
	todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
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

//                       Задача 1

// При помощи метода querySelector получаем элементы .form, .input и .todos

const form = document.querySelector("form");
const input = document.querySelector(".input");
const todosElement = document.querySelector(".todos");

//                       Задача 2

// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки

const createTodoElement = todo => {
	const newLi = document.createElement("li");
	const todoText = document.createElement("div");
	const todoActions = document.createElement("div");
	const todoCompleteAction = document.createElement("button");
	const todoDeleteAction = document.createElement("button");

	newLi.classList.add("todo");

	todoText.classList.add("todo-text");
	todoText.textContent = todo.text;

	todoCompleteAction.classList.add("button");
	todoCompleteAction.textContent = "✔";

	todoDeleteAction.classList.add("button");
	todoDeleteAction.textContent = "✖";

	todoActions.classList.add("todo-actions");
	todoActions.append(todoCompleteAction, todoDeleteAction);

	newLi.append(todoText, todoActions);

	return newLi;
};

const createButton = document.querySelector(".button-create");

//                       Задача 3

// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement

const handleCreateTodo = (todos, text) => {
	const todo = createTodo(todos, text);
	const todoElement = createTodoElement(todo);

	todosElement.prepend(todoElement);
};

createButton.addEventListener("click", () => {
	event.preventDefault();

	handleCreateTodo(todos, input.value);
});
