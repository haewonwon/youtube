import React from "react"
import styles from "../css/AboutNav.module.css"

import { useSelector } from "react-redux"

const NavButtonComponent = (props) => {
    const { id, data: {navSrc, navTitle} } = props

    const [navIconStyle, setNavIconStyle] = React.useState(false)
    const wideNavOpened = useSelector((state) => state.wideNavOpened)

    const navMouseEnterEvent = () => {
        setNavIconStyle(true)
    }

    const navMouseLeaveEvent = () => {
        setNavIconStyle(false)
    }

    return (
        <div id={`nav_icon_${id}`} className={wideNavOpened ? (navIconStyle ? styles.enterOriginBtnStyle : styles.originBtnStyle) : (navIconStyle ? styles.enterNewBtnStyle : styles.newBtnStyle)} onMouseEnter={navMouseEnterEvent} onMouseLeave={navMouseLeaveEvent}>
            <button id={`nav_icon_${id}`}><img id={`nav_icon_${id}`} src={navSrc} className={styles.nicon}/></button>
            <p id={`nav_icon_${id}`}>{navTitle}</p>
        </div>
    )
}

export default NavButtonComponent