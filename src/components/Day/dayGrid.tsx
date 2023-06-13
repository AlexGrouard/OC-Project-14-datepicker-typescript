import { DateTime } from "luxon"
import { useEffect, useState } from "react"
import { daysShort } from "../../data/data"
import { daysGridProps } from "../../utils/type"
import styles from "./dayGrid.module.css"

function dayGrid({ day, month, year }: daysGridProps): JSX.Element {
	let grid: number[] = []
	const startDay = DateTime.fromObject({ day: 1, month, year }).weekday
	const daysInMonth = DateTime.fromObject({ day: 1, month, year }).daysInMonth
	const daysInPrevMonth = DateTime.fromObject({
		day: 1,
		month: month - 1,
		year,
	}).daysInMonth

	grid = [...Array(daysInMonth).keys()]
	grid = grid.map((day) => day + 1)
	const prevMonthDays = [...Array(startDay - 1).keys()]
	prevMonthDays.forEach((day) => {
		grid.unshift(daysInPrevMonth - day)
	})
	const nextMonthDays = [...Array(7 - (grid.length % 7)).keys()]
	nextMonthDays.forEach((day) => {
		grid.push(day + 1)
	})


	console.log(grid)
	return (
		<table>
			<thead>
				<tr>
					{daysShort.map((day) => (
						<th key={day}>{day}</th>
					))}
				</tr>
			</thead>
			<tbody>
				<tr></tr>
			</tbody>
		</table>
	)
}

export default dayGrid
