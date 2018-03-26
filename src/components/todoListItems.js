import React from 'react';
import ToDoList from './todoApp';


const TodoItem = (({ id, value, handleRemove }) => {
	return(
		<tr className="Table-Row">
			<td>{value}</td>
			<td><button onClick={() => handleRemove(id)}>Remove</button></td>
		</tr>
	)
})

const TodoList = ({ items, handleRemove }) => {
	const list = items.map((item, index) =>
		<TodoItem key={index} id={index} value={item} handleRemove={handleRemove} />);
	return(
		<table className="ToDoList-Table">
			<thead className="Table-Heading">
				<tr>
					<th> Task Name</th>
					<th> Remove </th>
				</tr>
			</thead>
			<tbody>{list}</tbody>
		</table>
	);
}

export default TodoList;
