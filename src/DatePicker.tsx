import React from "react"
import Header from "./components/Header/Header"
import styles from "./styles/DatePicker.module.scss"

function DatePicker() {
	return (
		<main className={styles.main}>
			<input type='text' />
			<div className={styles.dateContainer}>
				<Header />
				<p>Date Picker</p>
			</div>
		</main>
	)
}

export default DatePicker
