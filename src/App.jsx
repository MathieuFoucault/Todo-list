import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
	const [tasks, setTasks] = useState([]);

	// console.log(tasks);

	return (
		<>
			<ToDoForm tasks={tasks} setTasks={setTasks} />
			<ToDoList tasks={tasks} />
		</>
	);
}

export default App;
