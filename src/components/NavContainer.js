import React from "react"
import NavButtonComponent from "./NavButtonComponent.js"
import WideNavContainer from "./WideNavContainer"
import styles from "../css/AboutNav.module.css"

import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { navMouseEnter, navMouseLeave, navIconUpdate } from "../Redux/Action.js"

const NavContainer = () => {

    const [data, setData] = React.useState([])

    const dispatch = useDispatch()
    // true, false 로 나온다면 isNavSelected 등
    const navIconStyle = useSelector(state => state.navIconStyle)
    const wideNavOpened = useSelector((state) => state.wideNavOpened)

    const navMouseEnterEvent = (e) => {

        const iconIndex = parseInt(e.target.id.split('_')[2])

        switch(e.target.id) {
            case `nav_icon_${iconIndex}` :
                dispatch(navMouseEnter(iconIndex))
                break
        }

    }

    const navMouseLeaveEvent = (e) => {

        const iconIndex = parseInt(e.target.id.split('_')[2])

        switch(e.target.id) {
            case `nav_icon_${iconIndex}` :
                dispatch(navMouseLeave(iconIndex))
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

    // key랑 id 랑 같은 값이기에 id는 지워도 됨
    // 속성 너무 많으니 줄이기
    return (
        <>
            <nav id="nav_component" onMouseEnter={navMouseEnterEvent} onMouseLeave={navMouseLeaveEvent} onClick={iconClickEvent}>
            {
                data.map ((element, navIndex) => <NavButtonComponent key={navIndex} id={navIndex} src={element.src} title={element.title} className={navIconStyle === navIndex ? styles.enterOriginBtnStyle : styles.originBtnStyle} />)
            }
            </nav>
            <>
                {wideNavOpened && <WideNavContainer />}
            </>
        </>
    )
}

export default NavContainer