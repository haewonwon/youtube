import React from "react"
import NavButtonComponent from "./NavButtonComponent.js"
import styles from "../css/AboutNav.module.css"

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

import { navDataState, wideNavOpendState, iconIndexState } from "../Recoil/mainAtom.js"

const NavContainer = () => {

    const [navData, setNavData] = useRecoilState(navDataState)
    const wideNavOpened = useRecoilValue(wideNavOpendState)
    const navIconUpdate = useSetRecoilState(iconIndexState)

    const iconClickEvent = (e) => {

        const iconIndex = parseInt(e.target.id.split('_')[2])

        switch (e.target.id) {
            case `nav_icon_${iconIndex}`:
                navIconUpdate(iconIndex)
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

        setNavData(navDataSet)
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