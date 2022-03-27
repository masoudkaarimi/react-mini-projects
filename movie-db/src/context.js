import { useState, useContext, createContext } from 'react';
import useFetch from './useFetch';
const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [query, setQuery] = useState('Spider-Man');
	const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

	return <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
