// src/context/AppContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

// Initial State
const initialState = {
  user: null,
  products: [],
  isLoading: true,
  error: null,
};

// Reducer Function
function appReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,
        user: action.payload.user,
      };
    case 'FETCH_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload),
      };
    case 'CLEAR_PRODUCTS':
      return { ...state, products: [] };
    default:
      return state;
  }
}

// Provider Component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Simulated Async Data Fetching
  const fetchData = async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      // Simulate network latency (1.5 seconds)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Mock Data (Change to [] to test Empty State!)
      const mockUser = { name: 'Alex Johnson', role: 'Admin' };
      const mockProducts = [
        { id: 1, name: 'Wireless Headphones', price: '$99' },
        { id: 2, name: 'Mechanical Keyboard', price: '$149' },
        { id: 3, name: 'Ergonomic Chair', price: '$299' },
      ];

      dispatch({
        type: 'FETCH_SUCCESS',
        payload: { user: mockUser, products: mockProducts },
      });
    } catch (err) {
      dispatch({ type: 'FETCH_ERROR', payload: 'Failed to load data.' });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch, refetch: fetchData }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom Hook for Easy Consumption
export const useApp = () => useContext(AppContext);