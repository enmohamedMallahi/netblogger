import React, { createContext, useReducer } from 'react';
import { blogsReducer } from './reducers';

const initialState = [
  {
    Author: 'Mohamed Mallahi',
    id: 1,
    title: 'Accidentation Magngincation Storm',
    body: 'Dire  rerum est autem su et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrumnt rem eveniet architecto.',
  },
  {
    Author: 'Mohamed Mallahi',
    id: 2,
    title: 'Sunt aut facere repellat provident occaecati',
    body: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto.',
  },
];

export const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogsReducer, initialState);

  return (
    <BlogsContext.Provider value={[state, dispatch]}>
      {children}
    </BlogsContext.Provider>
  );
};
