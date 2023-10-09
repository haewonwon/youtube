import { createStore } from "redux"

const initState = {
    "wideNavOpened": false,
    "navIconIndex": 0,
    "navData": [],
    "videoData": []
}

const reducer = (state = initState, action) => {

    switch(action.type)  {
        case "MENU_BTN_CLICK":
            return {
                ...state,
                "wideNavOpened": !state.wideNavOpened
            }
        case "NAV_ICON_UPDATE":
            return {
                ...state,
                "navIconIndex": action.payload
            }
        case "NAV_DATA_IMPORT":
            return {
                ...state,
                "navData": action.payload
            }
        case "VIDEO_DATA_IMPORT":
            return {
                ...state,
                "videoData": action.payload
            }
        default:
            return state
    }

}

const store = createStore(reducer)

export default store