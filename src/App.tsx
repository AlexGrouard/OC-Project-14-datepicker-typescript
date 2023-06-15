import "./App.css"
import DatePicker from "./lib/DatePicker"

function App() {
	return (
		<form>
			<label> Date </label>
			<DatePicker yearRange={{ start: 2016, end: 2026 }} />
		</form>
	)
}

export default App
