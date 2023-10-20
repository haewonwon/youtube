import React from "react"
import sectionData from "../data/sectionData.json"
import VideoComponent from "./VideoComponent.js"
import ShortsComponent from "./ShortsComponent.js"
import SubsComponent from "./SubComponent.js"
import StorageComponent from "./StorageComponent.js"

import { useRecoilState, useRecoilValue } from "recoil"

import { videoDataState, iconIndexState } from "../Recoil/mainAtom.js"

import { Main } from "./videoStyle.js"

const MainContainer = () => {

    const [videoData, setVideoData] = useRecoilState(videoDataState)
    const navIconIndex = useRecoilValue(iconIndexState)


    React.useEffect(() => {
        setVideoData(sectionData)
    }, [])

    console.log(videoData)
    
    return (
        <Main flex="row_wrap">
            {
                navIconIndex === 0 || navIconIndex === 4 ? (videoData.map((element, mainIndex) => (<VideoComponent key={mainIndex} id={mainIndex} data={element} />)))
                : navIconIndex === 1 || navIconIndex === 5 ? ( <ShortsComponent /> )
                : navIconIndex === 2 || navIconIndex === 6 ? ( <SubsComponent /> )
                : navIconIndex === 3 || navIconIndex === 7 ? ( <StorageComponent /> )
                : null
            }
        </Main>
    )
}

export default MainContainer