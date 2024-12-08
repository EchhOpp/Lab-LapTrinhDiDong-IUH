import { atom, selector } from 'recoil';

// Atom để lưu trữ danh sách todo
export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

// Selector để lấy danh sách todo từ API
export const fetchTodoList = selector({
  key: 'fetchTodoList',
  get: async ({ get }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
  },
});