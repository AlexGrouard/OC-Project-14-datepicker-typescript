import { DateTime } from "luxon"
import { useEffect, useState } from "react"
import house from "./assets/house-solid.svg"
import leftArrow from "./assets/leftArrow.svg"
import rightArrow from "./assets/rightArrow.svg"
import DayGrid from "./components/Day/dayGrid"
import { months } from "./data/data"
import styles from "./styles/DatePicker.module.scss"
import { MonthType } from "./utils/type"

function DatePicker() {
	const dt = DateTime.local()
	const [currentDate, setCurrentDate] = useState("")
	const [day, setDay] = useState(dt.day)
	const [month, setMonth] = useState(dt.month)
	const [year, setYear] = useState(dt.year)
	const [stringMonth, setStringMonth] = useState("")

	const today = () => {
		setCurrentDate(DateTime.now().toLocaleString())
		setDay(dt.day)
		setMonth(dt.month)
		setYear(dt.year)
	}
	const changeDate = () => {
		console.log(currentDate)
	}
	const monthDecrease = () => {
		const newMonth = month - 1
		if (newMonth < 1) {
			setMonth(12)
			setYear(year - 1)
		} else setMonth(newMonth)
	}

	const monthIncrease = () => {
		const newMonth = month + 1
		if (newMonth > 12) {
			setMonth(1)
			setYear(year + 1)
		} else setMonth(newMonth)
	}

	useEffect(() => {
		setStringMonth(months[month as keyof MonthType])
		if (currentDate) {
			const dt = DateTime.fromISO(currentDate)
			setDay(dt.day)
			setMonth(dt.month)
			setYear(dt.year)
		}
	}, [month, currentDate])

	return (
		<main className={styles.main}>
			<input
				type='string'
				value={currentDate}
				onChange={(e) => setCurrentDate(e.target.value)}
			/>
			<div className={styles.header}>
				<img
					src={leftArrow}
					alt='left Arrow'
					width={20}
					onClick={monthDecrease}
				/>
				<img src={house} alt='home' width={20} onClick={today} />
				<div>
					<span>{stringMonth}</span>
					<span>{year}</span>
				</div>
				<img
					src={rightArrow}
					alt='right Arrow'
					width={20}
					onClick={monthIncrease}
				/>
			</div>
			<DayGrid day={day} month={month} year={year} />
		</main>
	)
}

export default DatePicker
