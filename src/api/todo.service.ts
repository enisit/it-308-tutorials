import axios from "axios";

export type Todo = {
  id: string;
  title: string;
  description: string;
  image: string;
};
export const getTodos = async (): Promise<Todo[]> => {
  return axios
    .get("https://662abf6bd3f63c12f458979c.mockapi.io/todos")
    .then((response) => response.data);
};
