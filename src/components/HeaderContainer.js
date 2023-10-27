import React from "react"
import styled from "styled-components"

import { useRecoilState } from "recoil"
import { wideNavOpendState } from "../Recoil/mainAtom.js"

import { Header } from "./commonStyle.js"
import { Button } from "./commonStyle.js"
import { Div } from "./commonStyle.js"
import { Img } from "./commonStyle.js"
import { Input } from "./commonStyle.js"


const FixedHeader = styled(Header)`
    position: fixed;
`
const HeaderContainer = () => {

    const [wideNav, setWideNav] = useRecoilState(wideNavOpendState)

    const menuBtnClickEvent = (e) => {
        switch(e.target.id) {
            case "menuicon":
                setWideNav(!wideNav)
                break
        }
    }

    return (
        <FixedHeader flex="row_between" onClick={menuBtnClickEvent}>
            <Div flex="row_0_center">
                <Button><Img src="/img/www.youtube.com_ (6).png" id="menuicon" width="30px" /></Button>
                <Button><Img src="/img/www.youtube.com_ (7).png" width="140px" height="27px" /></Button>
            </Div>
            <Div flex="row_center_center" flexBasis="800px">
                <Input type="text" placeholder="검색" />
                <Button backgroundColor="#dbdcdb" borderRadius="0 40px 40px 0" height="46px"><Img src="/img/www.youtube.com_channel_UCXteMTpHAvyDP05G0QULuZA (1).png" width="30px" /></Button>
                <Button><Img src="/img/www.youtube.com_channel_UCXteMTpHAvyDP05G0QULuZA (2).png" width="45px" /></Button>
            </Div>
            <Div flex="row_0_center">
                <Button><Img src="/img/www.youtube.com_channel_UCXteMTpHAvyDP05G0QULuZA (3).png" width="30px" /></Button>
                <Button><Img src="/img/www.youtube.com_channel_UCXteMTpHAvyDP05G0QULuZA (5).png" width="30px" /></Button>
                <Button><Img src="/img/channels4_profile.jpg" width="40px" height="40px" borderRadius="50%" /></Button>
            </Div>
        </FixedHeader>
    )
}

export default HeaderContainer