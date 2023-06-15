import DatePicker from "./DatePicker"
import "./styles/App.css"

function App() {
	return (
		<form>
			<label> Date </label>
			<DatePicker yearRange={{ start: 2016, end: 2026 }} />
		</form>
	)
}

export default App
