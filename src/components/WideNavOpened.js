import React from "react"
import WideNavContainer from "./WideNavContainer"
import { useSelector } from "react-redux"

const IsWideNavOpened = () => {

    const wideNavOpened = useSelector((state) => state.wideNavOpened)

    return (
        <>
            {wideNavOpened && <WideNavContainer />}
        </>
    )
}

export default IsWideNavOpened