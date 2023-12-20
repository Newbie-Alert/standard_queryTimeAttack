import axios from "axios"

export const fetchTodos = async () => {
  const res = await axios.get('http://localhost:4000/todos');
  return res.data;
}

