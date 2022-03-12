import React, { useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
	loading: false,
	cart: cartItems,
	total: 0,
	amount: 0,
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// Clear cart
	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' });
	};

	// Remove by id
	const remove = (id) => {
		dispatch({ type: 'REMOVE', payload: id });
	};

	// Increase by id
	const increase = (id) => {
		dispatch({ type: 'INCREASE', payload: id });
	};

	// Decrease by id
	const decrease = (id) => {
		dispatch({ type: 'DECREASE', payload: id });
	};

	// Fetching data from API
	const fetchData = async () => {
		dispatch({ type: 'LOADING' });
		const response = await fetch(url);
		const cart = await response.json();
		dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
	};

	// Toggle amount
	const toggleAmount = (id, type) => {
		dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		dispatch({ type: 'GET_TOTALS' });
	}, [state.cart]);

	return (
		<AppContext.Provider
			value={{
				...state,
				clearCart,
				remove,
				increase,
				decrease,
				toggleAmount,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
