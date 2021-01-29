import AddTodo from "./components/add_todo/AddTodo.component";
import Counter from "./components/counter/Counter.component";
import CounterDisplay from "./components/counter_display/CounterDisplay";
import Todo from "./components/todo/Todo.component";

function App() {
  return (
    <div className="App">
      <h2>Counter App</h2>
      <Counter />
      <CounterDisplay />
      <Todo />
      <AddTodo />
    </div>
  );
}

export default App;
