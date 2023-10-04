import React from "react"
import styles from "../css/AboutHeader.module.css"

import { useDispatch } from "react-redux"
import { menuBtnClick } from "../Redux/Action.js"

const HeaderContainer = () => {

    const dispatch = useDispatch()

    const menuBtnClickEvent = (e) => {
        switch(e.target.id) {
            case "menuicon":
                dispatch(menuBtnClick())
                break
        }
    }

    return (
        <header onClick={menuBtnClickEvent}>
            <div id={styles.start}>
                <button><img src="/img/www.youtube.com_ (6).png" id="menuicon" className={styles.hicon} /></button>
                <button><img src="/img/www.youtube.com_ (7).png" id={styles.ytbicon} className={styles.hicon} /></button>
            </div>
            <div id={styles.center}>
                <input id={styles.search} type="text" placeholder="검색" />
                <button id={styles.searchicon}><img src="/img/www.youtube.com_channel_UCXteMTpHAvyDP05G0QULuZA (1).png" className={styles.hicon} /></button>
                <button><img src="/img/www.youtube.com_channel_UCXteMTpHAvyDP05G0QULuZA (2).png" id={styles.micicon} className={styles.hicon} /></button>
            </div>
            <div id={styles.end}>
                <button><img src="/img/www.youtube.com_channel_UCXteMTpHAvyDP05G0QULuZA (3).png" className={styles.hicon} /></button>
                <button><img src="/img/www.youtube.com_channel_UCXteMTpHAvyDP05G0QULuZA (5).png" className={styles.hicon} /></button>
                <button><img src="/img/channels4_profile.jpg" id={styles.pficon} className={styles.hicon} /></button>
            </div>
        </header>
    )
}

export default HeaderContainer