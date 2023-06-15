import { DateTime } from "luxon"
import { useEffect, useRef, useState } from "react"
import house from "./assets/house-solid.svg"
import leftArrow from "./assets/leftArrow.svg"
import rightArrow from "./assets/rightArrow.svg"
import DayGrid from "./components/Day/dayGrid"
import SelectMonth from "./components/SelectMonth/SelectMonth"
import SelectYear from "./components/SelectYear/SelectYear"
import styles from "./styles/DatePicker.module.scss"
import { DatePickerProps } from "./utils/type"

function DatePicker({ yearRange }: DatePickerProps): JSX.Element {
	const dt = DateTime.local()
	const todayFrench: string = DateTime.now().setLocale("fr").toLocaleString()
	const [currentDate, setCurrentDate] = useState<string>("")
	const [day, setDay] = useState<number>(dt.day)
	const [month, setMonth] = useState<number>(dt.month)
	const [year, setYear] = useState<number>(dt.year)
	const [isHidden, setIsHidden] = useState<boolean>(true)

	const dropdownRef = useRef<HTMLDivElement>(null)

	const today = () => {
		setDay(DateTime.now().day)
		setMonth(DateTime.now().month)
		setYear(DateTime.now().year)
	}

	const monthDecrease = () => {
		const newMonth: number = month - 1
		if (newMonth < 1) {
			setMonth(12)
			setYear(year - 1)
		} else {
			setMonth(newMonth)
		}
	}

	const monthIncrease = () => {
		const newMonth: number = month + 1
		if (newMonth > 12) {
			setMonth(1)
			setYear(year + 1)
		} else {
			setMonth(newMonth)
		}
	}

	//handle select change for month and year
	const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setMonth(parseInt(e.target.value))
	}
	const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setYear(parseInt(e.target.value))
	}

	//handle input change 
	const handleInputDatePicker = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.target.value === ""
			? setCurrentDate(todayFrench)
			: setCurrentDate(e.target.value)

		const [day, month, year] = e.target.value.split("/")

		if (day && month && year) {
			setDay(parseInt(day))
			setMonth(parseInt(month))
			setYear(parseInt(year))
		} else {
			setDay(DateTime.now().day)
			setMonth(DateTime.now().month)
			setYear(DateTime.now().year)
		}
	}

	useEffect(() => {
		//handle close dropdown when click outside
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsHidden(true)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

	return (
		<main className={styles.main} ref={dropdownRef}>
			<input
				type='string'
				value={currentDate}
				onChange={handleInputDatePicker}
				onClick={() => setIsHidden(false)}
			/>
			<div className={isHidden ? styles.hidden : styles.visible}>
				<div className={styles.header}>
					<img
						src={leftArrow}
						alt='left Arrow'
						width={20}
						onClick={monthDecrease}
					/>
					<img src={house} alt='home' width={20} onClick={today} />
					<div>
						<SelectMonth
							current={month}
							handleMonthChange={handleMonthChange}
						/>

						<SelectYear
							yearRange={yearRange}
							current={year}
							handleYearChange={handleYearChange}
						/>
					</div>
					<img
						src={rightArrow}
						alt='right Arrow'
						width={20}
						onClick={monthIncrease}
					/>
				</div>
				{<DayGrid day={day} month={month} year={year} />}
			</div>
		</main>
	)
}

export default DatePicker
