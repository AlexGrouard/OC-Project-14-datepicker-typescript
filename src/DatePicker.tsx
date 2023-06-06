import React from "react"
import Header from "./components/Header/Header"
import Week from "./components/Week/Week"
import styles from "./styles/DatePicker.module.scss"

function DatePicker() {
	return (
		<main className={styles.main}>
			<input type='text' />
			<div className={styles.dateContainer}>
				<Header />
				<Week />
			</div>
		</main>
	)
}

export default DatePicker
