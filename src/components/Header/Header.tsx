import React from "react"
import house from "../../assets/house-solid.svg"
import leftArrow from "../../assets/leftArrow.svg"
import rightArrow from "../../assets/rightArrow.svg"
import styles from "./Header.module.scss"

function Header() {
	return (
		<div className={styles.container}>
			<img src={leftArrow} alt='left Arrow' width={20} />
			<img src={house} alt='home' width={20} />
			<div>
				<span>Month</span>
				<span>Year</span>
			</div>
			<img src={rightArrow} alt='right Arrow' width={20} />
		</div>
	)
}

export default Header
