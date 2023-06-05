import React from "react"
import styles from "./styles/DatePicker.module.scss"
import Header from "./components/Header/Header"

function DatePicker() {
	return (
		<main className={styles.main}>
			<input type='text' />
			<div className={styles.dateContainer}>
				<Header />
			</div>
		</main>
	)
}

export default DatePicker
