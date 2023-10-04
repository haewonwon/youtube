import React from "react"
import NavButtonComponent from "./NavButtonComponent.js"
import styles from "../css/AboutNav.module.css"

import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { navMouseEnter, navMouseLeave, navIconUpdate } from "../Redux/Action.js"

const NavContainer = () => {

    const [data, setData] = React.useState([])

    const dispatch = useDispatch()
    const navIconStyle = useSelector(state => state.navIconStyle)

    const navMouseEnterEvent = (e) => {

        const iconIndex = parseInt(e.target.id.split('_')[2])

        switch(e.target.id) {
            case `nav_icon_${iconIndex}` :
                dispatch(navMouseEnter())
                break
        }

    }

    const navMouseLeaveEvent = (e) => {

        const iconIndex = parseInt(e.target.id.split('_')[2])

        switch(e.target.id) {
            case `nav_icon_${iconIndex}` :
                dispatch(navMouseLeave())
                break
        }

    }

    // const iconClickEvent = (e) => {

    //     const splitTargetId = e.target.id.split('_')

    //     switch (e.target.id) {
    //         case `nav_icon_${splitTargetId[2]}`:
    //             dispatch(navIconUpdate(splitTargetId[2]))
    //             break
    //     }

    // }

    const iconClickEvent = (e) => {

        const iconIndex = parseInt(e.target.id.split('_')[2])

        switch (e.target.id) {
            case `nav_icon_${iconIndex}`:
                dispatch(navIconUpdate(iconIndex))
                break
        }

    }

    React.useEffect(() => {

        const navDataSet = [
            {
                "className" : "originBtn",
                "src" : "/img/www.youtube.com_.png",
                "title" : "홈"
            },
            {
                "className" : "originBtn",
                "src" : "/img/www.youtube.com_ (1).png",
                "title" : "Shorts"
            },
            {
                "className" : "originBtn",
                "src" : "/img/www.youtube.com_ (4).png",
                "title" : "구독"
            },
            {
                "className" : "originBtn",
                "src" : "/img/www.youtube.com_(8).png",
                "title" : "보관함"
            }
        ]

        setData(navDataSet)
    }, [])

    return (
        <nav id="nav_component" onMouseEnter={navMouseEnterEvent} onMouseLeave={navMouseLeaveEvent} onClick={iconClickEvent}>
            {
                data.map ((element, navIndex) => <NavButtonComponent key={navIndex} id={navIndex} src={element.src} title={element.title} className={navIconStyle ? styles.enterOriginBtnStyle : styles.originBtnStyle} />)
            }
        </nav>
    )
}

export default NavContainer