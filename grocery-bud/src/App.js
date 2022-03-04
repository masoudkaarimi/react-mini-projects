import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

// Get list from localStorage
const getLocalStorage = () => {
	let list = localStorage.getItem('list');

	if (list) return (list = JSON.parse(localStorage.getItem('list')));
	else return [];
};

function App() {
	const [name, setName] = useState('');
	const [list, setList] = useState(getLocalStorage());
	const [isEditing, setIsEditing] = useState(false);
	const [editID, setEditID] = useState(null);
	const [alert, setAlert] = useState({ show: false, type: '', msg: '' });

  // Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name) {
			showAlert(true, 'danger', 'please enter value');
		} else if (name && isEditing) {
			setList(
				list.map((item) => {
					if (item.id === editID) {
						return { ...item, title: name };
					}
					return item;
				})
			);

			setName('');
			setEditID(null);
			setIsEditing(false);
			showAlert(true, 'success', 'value changed');
		} else {
      const newItem = { id: new Date().getTime().toString(), title: name };
			showAlert(true, 'success', 'item added to the list');

			setList([...list, newItem]);
			setName('');
		}
	};

  // Alert handling
	const showAlert = (show = false, type = '', msg = '') => {
		setAlert({ show, type, msg });
	};

  // Clear list
	const clearList = () => {
    setList([]);
		showAlert(true, 'danger', 'empty list');
	};
	
  // Remove item by ID
  const removeItem = (id) => {
		setList(list.filter((item) => item.id !== id));
		showAlert(true, 'danger', 'item removed');
	};

  // Edit item by ID
	const editItem = (id) => {
		const specificItem = list.find((item) => item.id === id);
		setIsEditing(true);
		setEditID(id);
		setName(specificItem.title);
	};

  // Rerender the component by changing the list
	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list));
	}, [list]);
	
  return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

				<h3>grocery bud</h3>
				<div className='form-control'>
					<input
						type='text'
						className='grocery'
						placeholder='e.g. eggs'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button type='submit' className='submit-btn'>
						{isEditing ? 'edit' : 'submit'}
					</button>
				</div>
			</form>
			{list.length > 0 ? (
				<div className='grocery-container'>
					<List items={list} removeItem={removeItem} editItem={editItem} />
					<button className='clear-btn' onClick={clearList}>
						clear items
					</button>
				</div>
			): (
        <div className='grocery-container text-center'>
          <p>Nothing...☹️</p>
        </div>
      )}
		</section>
	);
}

export default App;
