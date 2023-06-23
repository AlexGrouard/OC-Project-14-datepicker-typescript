import React, { useState } from "react"
import DatePicker from "../src/DatePicker"
import "./App.css"

function App() {
	const [date, setDate] = useState<string>("")
	const handleReturnDate = (date: string) => {
		setDate(date)
	}
	console.log(date)
	return (
		<form>
			<label> Date </label>
			<DatePicker
				yearRange={{ start: 1980, end: 2000 }}
				returnDate={handleReturnDate}
				placeholder='Birth Date'
			/>
		</form>
	)
}

export default App
