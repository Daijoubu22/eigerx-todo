import React from 'react';
import styles from './ToDoItem.module.scss';

function ToDoItem({ value, id, onDelete }) {
	return (
		<li className={styles.main}>
			<span>{value}</span>
			<button onClick={() => onDelete(id)}>Delete</button>
		</li>
	);
}

export default ToDoItem;
