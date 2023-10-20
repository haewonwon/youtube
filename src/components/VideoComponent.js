import React from "react"

import { useRecoilState, useResetRecoilState } from "recoil"

import { videoBorderStyleState } from "../Recoil/mainAtom.js"

import { Section } from "./videoStyle.js"
import { Img } from "./videoStyle.js"
import { Div } from "./videoStyle.js"
import { P } from "./videoStyle.js"
import { Span } from "./videoStyle.js"

const SectionComponent = (props) => {
    const { id, data: {thumbnailSrc, profileSrc, titles, youtubers, views, dates} } = props

    const [videoBorderStyle, setVideoBorderStyle] = useRecoilState(videoBorderStyleState)
    const resetVideoBorderStyle = useResetRecoilState(videoBorderStyleState)

    const videoMouseEnterEvent = () => {
        setVideoBorderStyle(!videoBorderStyle)
    }

    const videoMouseLeaveEvent = () => {
        resetVideoBorderStyle()
    }
    
    return (
        <Section flex="section" onMouseEnter={videoMouseEnterEvent} onMouseLeave={videoMouseLeaveEvent}>
            <Img id={`thumbnail_${id}`} src={thumbnailSrc} Width="100%" videoBorderStyle={videoBorderStyle} />
            <Div flex="row" Width="100%">
                <Img src={profileSrc} Width="37px" Height="37px" marginTop="7px" borderRadius="50%" />
                <Div marginTop="5px">
                    <P>{titles}</P>
                    <P fontSize="14px" Color="grey">{youtubers}</P>
                    <Span marginRight="3px">{views}</Span><Span>{dates}</Span>
                </Div>
            </Div>
        </Section>
    )
}

export default SectionComponent