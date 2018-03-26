import React, { Component } from 'react';

import SearchBox from './searchBox';
import TodoList from './todoListItems';
import { RemoveAll, ResetList } from './otherUtils'

import './todo.css';

const items = [
	'Build a simple Project',
	'Push it to GitHub repo',
	'Research about CSS for react',
	'Build Back End',
	'Do atleast 10 - 15 sample projects',
	'use only React - No Redux etc',
	'Aim atleast 2-3 projects per week'
];

export default class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			todos: items
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit(event) {
		const newTodos = [ ...this.state.todos, this.state.value ];
		this.setState({
			todos: newTodos,
			value: ''
		});
		event.preventDefault();
	}

	handleRemove(id) {
		const newTodos = this.state.todos.filter((_, index) => index !== id);
		this.setState({
			todos: newTodos
		});
	}

	handleRemoveAll(event) {
		this.setState({
			todos: []
		});
		event.preventDefault();
	}

	handleReset(event) {
		this.setState({
			todos: items
		});
		event.preventDefault();
	}


	render() {
		const { value, todos } = this.state;
		return(
			<div className="Todo-App">
				<h1> ToDo List App </h1>
				<SearchBox
					value={value}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
				<TodoList
					items={todos}
					handleRemove={this.handleRemove}
				/>
				<span>
					<RemoveAll
						handleRemoveAll={this.handleRemoveAll}
					/>	
					<ResetList
						handleReset={this.handleReset}
					/>
				</span>
			</div>
		)
	}
}