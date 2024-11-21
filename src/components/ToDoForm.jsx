export default function ToDoForm({ tasks, setTasks }) {
	// const [inputValue]
	const handleSubmit = (e) => {
		e.preventDefault();

		setTasks([...tasks, e.target[0].value]);
	};
	console.log(tasks);

	return (
		<div>
			<h1> Formulaire </h1>
			<form onSubmit={handleSubmit}>
				<input type="text" />
				<button type="submit"> Ajouter </button>
			</form>
		</div>
	);
}
