import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const fetchData = async () => {
  const resp = await axios.get(url);
  const data = resp.data as Todo;
  return data;
};

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finish?: ${completed}
  `);
};

(async () => {
  const todo = await fetchData();

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id, title, completed);
})();
