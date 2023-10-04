import React from "react"
import styles from "../css/AboutMain.module.css"

const ShortsComponent = () => {
    return (
        <>
            <div id={styles.shortsBox}>
                메롱 메롱 메롱
                스테이지어스
            </div>
            <div id={styles.settings}>
                <button class={styles.settingsItem}>좋아요</button>
                <button class={styles.settingsItem}>싫어요</button>
                <button class={styles.settingsItem}>댓글</button>
                <button class={styles.settingsItem}>공유</button>
                <button class={styles.settingsItem}>기타</button>
                <button class={styles.settingsItem}>프로필</button>
            </div>
        </>
    )
}

export default ShortsComponent