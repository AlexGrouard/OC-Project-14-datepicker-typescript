/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateTime } from "luxon"
import { daysShort } from "../../data/data"
import styles from "../../style/dayGrid.module.scss"
import { DaysGridProps } from "../../utils/type"

/**
 * Handle the grid of days for the selected month
 * @param {number} day - day of the month
 * @param {number} month - month of the year
 * @param {number} year - year
 * @param {function} getDay - function to return the selected day
 * @returns
 */

function dayGrid({ day, month, year, getDay }: DaysGridProps): JSX.Element {
	let grid: any[] = []

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
			grid.unshift(daysInPrevMonth - day + " prev")
		}
	})
	// create an array  for the days in the next month to be added to the grid.
	// Since we want 7 days rows, we need to check if the grid length is divisible by 7.
	// If not, we need to add the remaining days to the grid.

	const nextMonthDays = [...Array(7 - (grid.length % 7)).keys()]
	nextMonthDays.forEach((day) => {
		grid.push(day + 1 + " next")
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
				{/* 1st map to add the 4 row of days then inside each row map each day. 
				if it's a day from last month of next remove the key word and apply special CSS to render it unclickable */}
				{grid.map(function (row: any, i) {
					return (
						<tr key={i}>
							{row.map(function (mapDay: any, i: number) {
								if (
									mapDay.toString().includes("prev") ||
									mapDay.toString().includes("next")
								) {
									mapDay = mapDay.replace(" prev", "")
									mapDay = mapDay.replace(" next", "")
									return (
										<td className={styles.greyDay} key={i}>
											{mapDay}
										</td>
									)
								} else {
									return (
										<td
											className={
												mapDay === day ? styles.highlight : styles.normalDay
											}
											key={i}
											data-value={mapDay}
											onClick={() => getDay(mapDay)}
										>
											{mapDay}
										</td>
									)
								}
							})}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default dayGrid
