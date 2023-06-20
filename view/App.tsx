import React, { useEffect, useState } from "react"
import DatePicker from "../src/lib/DatePicker"
import "./App.css"

function App() {
	const [date, setDate] = useState<string>("")
	const handleReturnDate = (date: string) => {
		setDate(date)
	}
	useEffect(() => {
		console.log(date)
	}, [date])
	return (
		<form>
			<label> Date </label>
			<DatePicker
				yearRange={{ start: 2016, end: 2026 }}
				returnDate={handleReturnDate}
			/>
		</form>
	)
}

export default App
