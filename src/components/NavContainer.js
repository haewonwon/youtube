import React from "react"
import NavButtonComponent from "./NavButtonComponent.js"
import styled from "styled-components"

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

import { navDataState, wideNavOpendState, iconIndexState } from "../Recoil/mainAtom.js"

import { Nav } from "./commonStyle.js"

const FixedNav = styled(Nav)`
    position: fixed;
`

const NavContainer = () => {

    const [navData, setNavData] = useRecoilState(navDataState)
    const wideNavOpened = useRecoilValue(wideNavOpendState)
    const navIconUpdate = useSetRecoilState(iconIndexState)

    const iconClickEvent = (e) => {

        const iconIndex = parseInt(e.target.id.split('_')[2])

        // navIconUpdate => setIconIndex (update 보다 set 을 더 많이 사용함)
        switch (e.target.id) {
            case `nav_icon_${iconIndex}`:
                navIconUpdate(iconIndex)
                break
        }

    }

    React.useEffect(() => {

        const navDataSet = [
            {
                "navSrc" : "/img/www.youtube.com_.png",
                "navTitle" : "홈"
            },
            {
                "navSrc" : "/img/www.youtube.com_ (1).png",
                "navTitle" : "Shorts"
            },
            {
                "navSrc" : "/img/www.youtube.com_ (4).png",
                "navTitle" : "구독"
            },
            {
                "navSrc" : "/img/www.youtube.com_(8).png",
                "navTitle" : "보관함"
            }
        ]

        setNavData(navDataSet)
    }, [])

    return (
        <>
            <FixedNav onClick={iconClickEvent} flex="row_0_center">
            {
                navData.map ((element, navIndex) => <NavButtonComponent key={navIndex} id={navIndex} data={element} />)
            }
            </FixedNav>
            {
                wideNavOpened &&
                <FixedNav paddingTop="16px" zIndex="1" onClick={iconClickEvent} flex="inline_column_center">
                    {
                        navData.map ((element, navIndex) => <NavButtonComponent key={navIndex} id={navIndex} data={element}/>)
                    }
                </FixedNav>
            }
        </>
    )
}

export default NavContainer