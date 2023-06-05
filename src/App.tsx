import { useState } from "react"
import DatePicker from "./DatePicker"
import reactLogo from "./assets/react.svg"
import "./styles/App.css"
import viteLogo from "/vite.svg"

function App() {
	const [count, setCount] = useState(0)

	return (
		<form>
			<label> Date </label>
			<DatePicker />
		</form>
	)
}

export default App
