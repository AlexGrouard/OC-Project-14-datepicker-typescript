/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateTime } from "luxon"
import { daysShort } from "../../data/data"
import { DaysGridProps } from "../../utils/type"
import styles from "./dayGrid.module.scss"

function dayGrid({ day, month, year }: DaysGridProps): JSX.Element {
	let grid: number[] = []

	const startDay = DateTime.local(year, month, 1).weekday
	const daysInMonth = DateTime.local(year, month, 1).daysInMonth
	const daysInPrevMonth = DateTime.local(year, month - 1, 1).daysInMonth

	//create a array of days in month
	grid = [...Array(daysInMonth).keys()]
	//remove 0 from array
	grid = grid.map((day) => day + 1)
	// create an array  for the days in the previous month to be added to the grid.
	//Get the current day (wed = 3) and subtract 1 to get the number of days to add to the grid. (3 - 1 = 2)
	//2 days to add to the grid
	const prevMonthDays = [...Array(startDay - 1).keys()]
	prevMonthDays.forEach((day) => {
		if (daysInPrevMonth) {
			grid.unshift(daysInPrevMonth - day)
		}
	})
	// create an array  for the days in the next month to be added to the grid.
	// Since we want 7 days rows, we need to check if the grid length is divisible by 7.
	// If not, we need to add the remaining days to the grid.

	const nextMonthDays = [...Array(7 - (grid.length % 7)).keys()]
	nextMonthDays.forEach((day) => {
		grid.push(day + 1)
	})

	// split the grid into 7 days rows
	grid = grid.reduce((acc: any, curr, i) => {
		if (i % 7 === 0) {
			acc.push([curr])
		} else {
			acc[acc.length - 1].push(curr)
		}
		return acc
	}, [])

	return (
		<table>
			<thead>
				<tr>
					{daysShort.map((day) => (
						<th className={styles.weekday} key={day}>
							{day}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{grid.map((row: any, i) => (
					<tr key={i}>
						{row.map((mapDay: any, i: number) => (
							<td
								className={mapDay === day ? styles.highlight : styles.normalDay}
								key={i}
							>
								{mapDay}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default dayGrid
