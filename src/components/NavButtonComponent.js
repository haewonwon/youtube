import React from "react"
import styles from "../css/AboutNav.module.css"

const NavButtonComponent = (props) => {
    const { id, src, title, className } = props

    return (
        <div id={`nav_icon_${id}`} className={className}>
            <button id={`nav_icon_${id}`}><img id={`nav_icon_${id}`} src={src} className={styles.nicon}/></button>
            <p id={`nav_icon_${id}`}>{title}</p>
        </div>
    )
}

export default NavButtonComponent