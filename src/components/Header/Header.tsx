import { useEffect, useState } from "react"
import house from "../../assets/house-solid.svg"
import leftArrow from "../../assets/leftArrow.svg"
import rightArrow from "../../assets/rightArrow.svg"
import { months } from "../../data/data"
import { MonthType } from "../../utils/type"
import styles from "./Header.module.scss"

function Header() {
	const [month, setMonth] = useState(new Date().getMonth())
	const [year, setYear] = useState(new Date().getFullYear())
	const [stringMonth, setStringMonth] = useState("")

	useEffect(() => {
		setStringMonth(months[month as keyof MonthType])
		console.log(month)
	}, [month])

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
	const today = () => {
		setMonth(new Date().getMonth())
		setYear(new Date().getFullYear())
	}

	return (
		<div className={styles.container}>
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
	)
}

export default Header
