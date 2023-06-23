import { months } from "../data/data"
import { SelectMonthProps } from "../utils/type"

function SelectMonth({
	current,
	handleMonthChange,
}: SelectMonthProps): JSX.Element {
	return (
		<select value={current} onChange={handleMonthChange}>
			{Object.entries(months).map(function ([key, value]) {
				return (
					<option key={key} value={key}>
						{value}
					</option>
				)
			})}
		</select>
	)
}

export default SelectMonth
