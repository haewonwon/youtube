import { createStore } from "redux"

const initState = {
    "wideNavOpened": false,
    "navIconStyle": false,
    "navIconIndex": 0,
    "videoBorderStyle": false
}

const reducer = (state = initState, action) => {

    switch(action.type)  {
        // <header> 의 menu btn click 시 wide nav open 할지 말지
        // 1
        case "MENU_BTN_CLICK":
            return {
                ...state,
                "wideNavOpened": !state.wideNavOpened
            }
        // <nav> 의 icon 에 mouse enter, leave에 따라 true, false
        // 2
        case "NAV_MOUSE_ENTER":
        case "NAV_MOUSE_LEAVE":
            return {
                ...state,
                "navIconStyle": !state.navIconStyle
            }
        // <nav> 의 4개 icon 중 어떤 것을 선택하냐에 따라 그 아이콘의 index 전달
        // 3
        case "NAV_ICON_UPDATE":
            return {
                ...state,
                "navIconIndex": action.payload
            }
        default:
            return state
        // <section> 에 mouse enter, leave 에 따라 treu, false
        // 5
        case "VIDEO_MOUSE_ENTER":
        case "VIDEO_MOUSE_LEAVE":
            return {
                ...state,
                "videoBorderStyle": !state.videoBorderStyle
            }
    }

}

const store = createStore(reducer)

export default store