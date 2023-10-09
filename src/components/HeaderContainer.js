import React from "react"
import styled from "styled-components"

import { useRecoilState } from "recoil"
import { wideNavOpendState } from "../Recoil/mainAtom.js"

import { Header } from "./commonStyle"
import { Button } from "./commonStyle"

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
            <div id={styles.start}>
                <Button><img src="/img/www.youtube.com_ (6).png" id="menuicon" className={styles.hicon} /></Button>
                <Button><img src="/img/www.youtube.com_ (7).png" id={styles.ytbicon} className={styles.hicon} /></Button>
            </div>
            <div id={styles.center}>
                <input id={styles.search} type="text" placeholder="검색" />
                <Button backgroundColor="#dbdcdb" borderRadius="0 40px 40px 0" height="46px"><img src="/img/www.youtube.com_channel_UCXteMTpHAvyDP05G0QULuZA (1).png" className={styles.hicon} /></Button>
                <Button><img src="/img/www.youtube.com_channel_UCXteMTpHAvyDP05G0QULuZA (2).png" id={styles.micicon} className={styles.hicon} /></Button>
            </div>
            <div id={styles.end}>
                <Button><img src="/img/www.youtube.com_channel_UCXteMTpHAvyDP05G0QULuZA (3).png" className={styles.hicon} /></Button>
                <Button><img src="/img/www.youtube.com_channel_UCXteMTpHAvyDP05G0QULuZA (5).png" className={styles.hicon} /></Button>
                <Button><img src="/img/channels4_profile.jpg" id={styles.pficon} className={styles.hicon} /></Button>
            </div>
        </FixedHeader>
    )
}

export default HeaderContainer