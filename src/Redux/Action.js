// 1
export const menuBtnClick = () => {
    return {
        "type" : "MENU_BTN_CLICK"
    }
}
// 2
export const navMouseEnter = (iconIndex) => {
    return {
        "type" : "NAV_MOUSE_ENTER",
        "payload" : iconIndex
    }
}

export const navMouseLeave = (iconIndex) => {
    return {
        "type" : "NAV_MOUSE_LEAVE",
        "payload" : iconIndex
    }
}
// 3
export const navIconUpdate = (iconIndex) => {
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
export const videoMouseEnter = (iconIndex) => {
    return {
        "type" : "VIDEO_MOUSE_ENTER",
        "payload" : iconIndex
    }
}

export const videoMouseLeave = (iconIndex) => {
    return {
        "type" : "VIDEO_MOUSE_LEAVE",
        "payload" : iconIndex
    }
}