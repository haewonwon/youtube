import React from "react"
import NavButtonComponent from "./NavButtonComponent.js"
import styles from "../css/AboutNav.module.css"

import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { navIconUpdate } from "../Redux/Action.js"
import { navDateImport } from "../Redux/Action.js"

const NavContainer = () => {

    const dispatch = useDispatch()
    const wideNavOpened = useSelector(state => state.wideNavOpened)
    const navData = useSelector(state => state.navData)

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
                "className" : "navBtn",
                "navSrc" : "/img/www.youtube.com_.png",
                "navTitle" : "홈"
            },
            {
                "className" : "navBtn",
                "navSrc" : "/img/www.youtube.com_ (1).png",
                "navTitle" : "Shorts"
            },
            {
                "className" : "navBtn",
                "navSrc" : "/img/www.youtube.com_ (4).png",
                "navTitle" : "구독"
            },
            {
                "className" : "navBtn",
                "navSrc" : "/img/www.youtube.com_(8).png",
                "navTitle" : "보관함"
            }
        ]

        dispatch(navDateImport(navDataSet))
    }, [])

    return (
        <>
            <nav id="nav_component" onClick={iconClickEvent}>
            {
                navData.map ((element, navIndex) => <NavButtonComponent key={navIndex} id={navIndex} data={element} />)
            }
            </nav>
            {
                wideNavOpened &&
                <nav id={styles.newnavcomponent} onClick={iconClickEvent}>
                    {
                        navData.map ((element, navIndex) => <NavButtonComponent key={navIndex + 4} id={navIndex + 4} data={element}/>)
                    }
                </nav>
            }
        </>
    )
}

export default NavContainer