import React from "react"
import sectionData from "../data/sectionData.json"
import VideoComponent from "./VideoComponent.js"
import ShortsComponent from "./ShortsComponent.js"
import SubsComponent from "./SubComponent.js"
import StorageComponent from "./StorageComponent.js"

import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { videoDataImport } from "../Redux/Action.js"

const MainContainer = () => {

    const dispatch = useDispatch()
    const navIconIndex = useSelector(state => state.navIconIndex)
    const videoData = useSelector(state => state.videoData)


    React.useEffect(() => {
        dispatch(videoDataImport(sectionData))
    }, [])

    console.log(videoData)
    
    return (
        <main>
            {
                navIconIndex === 0 || navIconIndex === 4 ? (videoData.map((element, mainIndex) => (<VideoComponent key={mainIndex} id={mainIndex} data={element} />)))
                : navIconIndex === 1 || navIconIndex === 5 ? ( <ShortsComponent /> )
                : navIconIndex === 2 || navIconIndex === 6 ? ( <SubsComponent /> )
                : navIconIndex === 3 || navIconIndex === 7 ? ( <StorageComponent /> )
                : null
            }
        </main>
    )
}

export default MainContainer