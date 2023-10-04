import React from "react"
import NavButtonComponent from "./NavButtonComponent.js"
import styles from "../css/AboutNav.module.css"

import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { navMouseEnter, navMouseLeave, navIconUpdate } from "../Redux/Action.js"

const WideNavContainer = () => {

    const [data, setData] = React.useState([])

    const dispatch = useDispatch()
    const navIconStyle = useSelector(state => state.navIconStyle)

    const navMouseEnterEvent = (e) => {

        const splitTargetId = e.target.id.split('_')
        const iconIndex = parseInt(splitTargetId[2])

        switch(e.target.id) {
            case `nav_icon_${iconIndex}` :
                dispatch(navMouseEnter())
                break
        }

    }

    const navMouseLeaveEvent = (e) => {

        const splitTargetId = e.target.id.split('_')
        const iconIndex = parseInt(splitTargetId[2])

        switch(e.target.id) {
            case `nav_icon_${iconIndex}` :
                dispatch(navMouseLeave())
                break
        }

    }

    const iconClickEvent = (e) => {

        const iconIndex = parseInt(e.target.id.split('_')[2])

        switch (e.target.id) {
            case `nav_icon_${iconIndex}`:
                dispatch(navIconUpdate(iconIndex))
                break
        }

    }

    React.useEffect(() => {

        const newNavDataSet = [
            {
                "className" : "newBtn",
                "src" : "/img/www.youtube.com_.png",
                "title" : "홈"
            },
            {
                "className" : "newBtn",
                "src" : "/img/www.youtube.com_ (1).png",
                "title" : "Shorts"
            },
            {
                "className" : "newBtn",
                "src" : "/img/www.youtube.com_ (4).png",
                "title" : "구독"
            },
            {
                "className" : "newBtn",
                "src" : "/img/www.youtube.com_(8).png",
                "title" : "보관함"
            }
        ]

        setData(newNavDataSet)
    }, [])

    return (
        <nav id={styles.newnavcomponent} onMouseEnter={navMouseEnterEvent} onMouseLeave={navMouseLeaveEvent} onClick={iconClickEvent}>
            {
                data.map ((element, navIndex) => <NavButtonComponent key={navIndex + 4} id={navIndex + 4} src={element.src} title={element.title} className={navIconStyle ? styles.enterNewBtnStyle : styles.newBtnStyle}/>)
            }
        </nav>
    )
}

export default WideNavContainer