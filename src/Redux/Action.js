// 1
const menuBtnClick = () => {
    return {
        "type" : "MENU_BTN_CLICK"
    }
}
// 2
const navMouseEnter = () => {
    return {
        "type" : "NAV_MOUSE_ENTER"
    }
}

const navMouseLeave = () => {
    return {
        "type" : "NAV_MOUSE_LEAVE"
    }
}
// 3
const navIconUpdate = (iconIndex) => {
    return {
        "type" : "NAV_ICON_UPDATE",
        "payload" : iconIndex
    }
}
// 4
// const videoClick = () => {
//     return {
//         "type" : "VIDEO_CLICK"
//     }
// }
// 5
const videoMouseEnter = () => {
    return {
        "type" : "VIDEO_MOUSE_ENTER"
    }
}

const videoMouseLeave = () => {
    return {
        "type" : "VIDEO_MOUSE_LEAVE"
    }
}

export { menuBtnClick, navMouseEnter, navMouseLeave, navIconUpdate, videoMouseEnter, videoMouseLeave }