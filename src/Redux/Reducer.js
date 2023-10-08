import { createStore } from "redux"

const initState = {
    "wideNavOpened": false,
    "navIconStyle": 0,
    "navIconIndex": 0,
    "videoBorderStyle": -1
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
                // "navIconStyle": !state.navIconStyle
                "navIconStyle": action.payload
            }
        // <nav> 의 4개 icon 중 어떤 것을 선택하냐에 따라 그 아이콘의 index 전달
        // 3
        case "NAV_ICON_UPDATE":
            return {
                ...state,
                "navIconIndex": action.payload
            }
        // <section> 에 mouse enter, leave 에 따라 true, false
        // 몇 번째 index 가 체크되어있는지 봐야 하기 때문에 true, false 로 처리할 수 없음
        // 영상 개수가 많기 때문에 redux 로 처리하면 안 됨 대표적으로 useState를 사용하는 부분
        // 이벤트를 시작하고, 도착하는 지점이 같을 때는 useState를 사용하는 게 효율적임 (예를 들어 mouseenter)
        // redux를 사용하지 않으면 이벤트 델리게이션을 줄 수 없음 리렌더링이 매우 비효율적임
        // 5
        case "VIDEO_MOUSE_ENTER":
            return {
                ...state,
                "videoBorderStyle": action.payload
            }
        case "VIDEO_MOUSE_LEAVE":
            return {
                ...state,
                "videoBorderStyle": -1
            }
        default:
            return state
    }

}

const store = createStore(reducer)

export default store