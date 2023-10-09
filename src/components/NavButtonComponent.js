import React from "react"
import styles from "../css/AboutNav.module.css"

import { useRecoilState, useResetRecoilState, useRecoilValue } from "recoil"

import { navIconStyleState, wideNavOpendState } from "../Recoil/mainAtom.js"

const NavButtonComponent = (props) => {
    const { id, data: {navSrc, navTitle} } = props

    const [navIconStyle, setNavIconStyle] = useRecoilState(navIconStyleState)
    const resetNavIconStyle = useResetRecoilState(navIconStyleState)

    const wideNavOpened = useRecoilValue(wideNavOpendState)

    const navMouseEnterEvent = () => {
        setNavIconStyle(!navIconStyle)
    }

    const navMouseLeaveEvent = () => {
        resetNavIconStyle()
    }

    return (
        <div id={`nav_icon_${id}`} className={wideNavOpened ? (navIconStyle ? styles.enterOriginBtnStyle : styles.originBtnStyle) : (navIconStyle ? styles.enterNewBtnStyle : styles.newBtnStyle)} onMouseEnter={navMouseEnterEvent} onMouseLeave={navMouseLeaveEvent}>
            <button id={`nav_icon_${id}`}><img id={`nav_icon_${id}`} src={navSrc} className={styles.nicon}/></button>
            <p id={`nav_icon_${id}`}>{navTitle}</p>
        </div>
    )
}

export default NavButtonComponent