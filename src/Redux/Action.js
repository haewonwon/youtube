export const menuBtnClick = () => {
    return {
        "type" : "MENU_BTN_CLICK"
    }
}
export const navIconUpdate = (iconIndex) => {
    return {
        "type" : "NAV_ICON_UPDATE",
        "payload" : iconIndex
    }
}

export const navDateImport = (data) => {
    return {
        "type" : "NAV_DATA_IMPORT",
        "payload" : data
    }
}

export const videoDataImport = (data) => {
    return {
        "type" : "VIDEO_DATA_IMPORT",
        "payload" : data
    }
}