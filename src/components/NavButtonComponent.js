import React from "react"

import { useRecoilState, useResetRecoilState, useRecoilValue } from "recoil"
import { navIconStyleState, wideNavOpendState } from "../Recoil/mainAtom.js"

import { Div } from "./navStyle.js"
import { Button } from "./navStyle.js"
import { Img } from "./navStyle.js"
import { P } from "./navStyle.js"

const NavButtonComponent = (props) => {
    const { id, data: {navSrc, navTitle} } = props

    const [navIconStyle, setNavIconStyle] = useRecoilState(navIconStyleState)
    const resetNavIconStyle = useResetRecoilState(navIconStyleState)

    // const [navIconStyle, setNavIconStyle] = useRecoilState(navIconStyleState(id))
    // const resetNavIconStyle = useResetRecoilState(navIconStyleState(id))


    const wideNavOpened = useRecoilValue(wideNavOpendState)

    const navMouseEnterEvent = () => {
        setNavIconStyle(!navIconStyle)
    }

    const navMouseLeaveEvent = () => {
        resetNavIconStyle()
    }

    return (
        <Div wideNavOpened={wideNavOpened} navIconStyle={navIconStyle} id={`nav_icon_${id}`} onMouseEnter={navMouseEnterEvent} onMouseLeave={navMouseLeaveEvent}>
            <Button id={`nav_icon_${id}`}><Img id={`nav_icon_${id}`} src={navSrc} /></Button>
            <P id={`nav_icon_${id}`}>{navTitle}</P>
        </Div>
    )
}

export default NavButtonComponent