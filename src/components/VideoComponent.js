import React from "react"
import styles from "../css/AboutMain.module.css"
 
const SectionComponent = (props) => {
    const { id, data: {thumbnailSrc, profileSrc, titles, youtubers, views, dates} } = props

    const [videoBorderStyle, setVideoBorderStyle] = React.useState(false)

    const videoMouseEnterEvent = () => {
        setVideoBorderStyle(true)
    }

    const videoMouseLeaveEvent = () => {
        setVideoBorderStyle(false)
    }
    
    return (
        <section className={styles.video} onMouseEnter={videoMouseEnterEvent} onMouseLeave={videoMouseLeaveEvent}>
            <img id={`thumbnail_${id}`} src={thumbnailSrc} className={videoBorderStyle ? styles.enterVideo : styles.leaveVideo}/>
            <div id={styles.data} className={styles.data}>
                <img id={styles.profile_img} src={profileSrc} className={styles.ppic} />
                <div id={styles.info} className={styles.info}>
                    <p id={styles.titles} className={styles.titles}>{titles}</p>
                    <p id={styles.youtubers} className={styles.youtubers}>{youtubers}</p>
                    <span id={styles.views} className={styles.views}>{views}</span><span id={styles.dates} className={styles.dates}>{dates}</span>
                </div>
            </div>
        </section>
    )
}

export default SectionComponent