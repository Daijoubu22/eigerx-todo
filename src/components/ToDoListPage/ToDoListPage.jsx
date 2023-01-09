import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import ToDoItem from "./ToDoItem/ToDoItem";
import styles from './ToDoListPage.module.scss';

function ToDoListPage() {
	const navigate = useNavigate();
	const [newToDoValue, setNewToDoValue] = useState('');
	const [toDoList, setToDoList] = useState([]);

	useEffect(() => {
		const authData = localStorage.getItem('auth');
		if (!authData) {
			navigate('/login');
		}
		const toDoListData = localStorage.getItem('toDoList');
		if (toDoListData) {
			setToDoList(JSON.parse(toDoListData));
		}
	}, [navigate]);

	function updateToDoList(newToDoList) {
		localStorage.setItem('toDoList', JSON.stringify(newToDoList));
		setToDoList(newToDoList);
	}

	function onNewToDoValueChange(event) {
		setNewToDoValue(event.target.value);
	}

	function addNewToDoItem() {
		if (!newToDoValue.trim()) {
			return;
		}
		const newToDoList = [...toDoList, {
			value: newToDoValue,
			id: Date.now(),
		}];
		updateToDoList(newToDoList);
		setNewToDoValue('');
	}

	function onDelete(id) {
		const newToDoList = toDoList.filter(item => item.id !== id);
		updateToDoList(newToDoList);
	}

	return (
		<div className={styles.main}>
			<h1>My to-do</h1>
			<div className={styles.redactor}>
				<textarea
					placeholder="New to-do"
					value={newToDoValue}
					onChange={onNewToDoValueChange}
					rows={4}
				/>
				<button type="button" onClick={addNewToDoItem}>Add new to-do</button>
			</div>
			<ul>
				{toDoList.map(item => (
					<ToDoItem
						value={item.value}
						id={item.id}
						key={item.id}
						onDelete={onDelete}
					/>
				))}
			</ul>
		</div>
	);
}

export default ToDoListPage;
