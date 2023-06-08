import { useEffect, useState } from "react"
import { daysShort } from "../../data/data"
import { daysGridProps } from "../../utils/type"

function dayGrid({ day, month, year }: daysGridProps): JSX.Element {
	const firstDay = new Date(year, month, 1)
	console.log(firstDay)
	//const [longMonth, setLongMonth] = useState(false)

	/*   if (longMonth) {
    //same grid but with 31 days
    return (
      <div>day</div>
    )
  }
   else if (february){
    //same grid but with 28 days
    return (
      <div>day</div>
    )
  } 
  else
  //same grid with 30 days
    return (
      <div>day</div>
    ) */

	// the grid must be 7 x 5
	// get in what day start the month
	// then add the day from last month to the day start
	//then complete the grid with all days
	// if the last part of the grid is empty
	// add the day of next month

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
				<tr></tr>
				<tr></tr>
				<tr></tr>
				<tr></tr>
			</tbody>
		</table>
	)
}

export default dayGrid
