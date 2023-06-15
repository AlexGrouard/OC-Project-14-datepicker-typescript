import { SelectYearProps } from "../utils/type"

function SelectYear({
	yearRange,
	current,
	handleYearChange,
}: SelectYearProps): JSX.Element {
	const years = [...Array(yearRange.end - yearRange.start + 1).keys()].map(
		(year) => year + yearRange.start
	)
	return (
		<select value={current} onChange={handleYearChange}>
			{years.map(function (year) {
				return (
					<option key={year} value={year}>
						{year}
					</option>
				)
			})}
		</select>
	)
}

export default SelectYear
