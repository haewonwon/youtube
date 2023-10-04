import React from "react"
import sectionData from "../data/sectionData.json"
import VideoComponent from "./VideoComponent.js"
import ShortsComponent from "./ShortsComponent.js"
import SubsComponent from "./SubComponent.js"
import StorageComponent from "./StorageComponent.js"

import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { videoMouseEnter, videoMouseLeave } from "../Redux/Action.js"

const MainContainer = () => {

    const [data, setData] = React.useState([])
    const dispatch = useDispatch()
    const navIconIndex = useSelector(state => state.navIconIndex)

    const videoMouseEnterEvent = (e) => {

        const videoIndex = parseInt(e.target.id.split('_')[1])

        switch(e.target.id) {
            case `thumbnail_${videoIndex}`:
                dispatch(videoMouseEnter())
                break
        }

    }

    const videoMouseLeaveEvent = (e) => {

        const videoIndex = parseInt(e.target.id.split('_')[1])

        switch(e.target.id) {
            case `thumbnail${videoIndex}`:
                dispatch(videoMouseLeave())
                break
        }

    }

    // const videoClickEvent = (e) => {
    //     const targetId = e.target.id

    //     switch (targetId) {
    //         case `thumbnail${id}`:
    //         case "data":
    //         case "info":
    //         case "titles":
    //         case "views":
    //         case "dates":
    //             window.location.href = 'https://youtu.be/RkCsWzljWEM?si=_nqPyzM0nv2eyhXQ'
    //             break
    //         case "profile_img":
    //         case "youtubers":
    //             window.location.href = 'https://www.youtube.com/@SilicaGel'
    //             break
    //     }
    // }

    React.useEffect(() => {
        setData(sectionData)
    }, [])
    
    return (
        <main onMouseEnter={videoMouseEnterEvent} onMouseLeave={videoMouseLeaveEvent}>
            {
                navIconIndex === 0 || navIconIndex === 4 ? (data.map((element, mainIndex) => (<VideoComponent key={mainIndex} id={mainIndex} data={element} />)))
                : navIconIndex === 1 || navIconIndex === 5 ? ( <ShortsComponent /> )
                : navIconIndex === 2 || navIconIndex === 6 ? ( <SubsComponent /> )
                : navIconIndex === 3 || navIconIndex === 7 ? ( <StorageComponent /> )
                : null
            }
        </main>
    )
}

export default MainContainer