import React from "react"

import { useRecoilState, useResetRecoilState } from "recoil"

import { videoBorderStyleState } from "../Recoil/mainAtom.js"

import { Section } from "./commonStyle.js"
import { Img } from "./commonStyle.js"
import { Div } from "./commonStyle.js"
import { P } from "./commonStyle.js"
import { Span } from "./commonStyle.js"

const SectionComponent = (props) => {
    const { id, data: {thumbnailSrc, profileSrc, titles, youtubers, views, dates} } = props

    const [videoBorderStyle, setVideoBorderStyle] = useRecoilState(videoBorderStyleState)
    const resetVideoBorderStyle = useResetRecoilState(videoBorderStyleState)


    const videoMouseEnterEvent = (e) => {

        const targetId = e.target.id
        const index = targetId.split("_")[1]
        setVideoBorderStyle(index)
    }

    const videoMouseLeaveEvent = () => {
        resetVideoBorderStyle()
    }
    
    return (
        <Section flex="section" onMouseEnter={videoMouseEnterEvent} onMouseLeave={videoMouseLeaveEvent}>
            <Img id={`thumbnail_${id}`} src={thumbnailSrc} width="100%" borderRadius={videoBorderStyle == id ? "0px" : "20px"} />
            <Div flex="row" Width="100%">
                <Img src={profileSrc} width="37px" height="37px" marginTop="7px" borderRadius="50%" />
                <Div marginTop="5px">
                    <P>{titles}</P>
                    <P fontSize="14px" color="grey">{youtubers}</P>
                    <Span marginRight="3px">{views}</Span><Span>{dates}</Span>
                </Div>
            </Div>
        </Section>
    )
}

export default SectionComponent