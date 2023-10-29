import React from "react"

import { useRecoilState, useResetRecoilState, useRecoilValue } from "recoil"
import { navIconStyleState, wideNavOpendState } from "../Recoil/mainAtom.js"

import { Div } from "./commonStyle.js"
import { Button } from "./commonStyle.js"
import { Img } from "./commonStyle.js"
import { P } from "./commonStyle.js"

const NavButtonComponent = (props) => {
    const { id, data: {navSrc, navTitle} } = props

    const [navIconStyle, setNavIconStyle] = useRecoilState(navIconStyleState)
    const resetNavIconStyle = useResetRecoilState(navIconStyleState)

    const wideNavOpened = useRecoilValue(wideNavOpendState)

    const navMouseEnterEvent = (e) => {

        const targetId = e.target.id
        const index = targetId.split("_")[2]
        setNavIconStyle(index)
    }

    const navMouseLeaveEvent = () => {
        resetNavIconStyle()
    }

    return (
        <Div flex={wideNavOpened ? 'row_0_center' : 'row_column_center'} width={wideNavOpened ? '160px': '68px'} borderRadius={navIconStyle ? '10px' : '0px'} backgroundColor={navIconStyle == id ? true : false} id={`nav_icon_${id}`} fontSize="13px" paddingTop="15px" paddingBottom="15px"  onMouseEnter={navMouseEnterEvent} onMouseLeave={navMouseLeaveEvent}>
            <Button id={`nav_icon_${id}`}><Img id={`nav_icon_${id}`} src={navSrc} width="25px" /></Button>
            <P id={`nav_icon_${id}`}>{navTitle}</P>
        </Div>
    )
}

export default NavButtonComponent