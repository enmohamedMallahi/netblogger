export const blogsReducer = (state, action) => {
  switch (action.type) {
    case 'add-article':
      return [...state, action.blog];
    case 'delete-article':
      return state;
    case 'edit-article':
      return state;
    default:
      return state;
  }
};
