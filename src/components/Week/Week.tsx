import { daysShort } from "../../data/data"
import styles from "./Week.module.scss"
function Week(): JSX.Element {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					{daysShort.map((day) => (
						<th key={day}>{day}</th>
					))}
				</tr>
			</thead>
		</table>
	)
}

export default Week
