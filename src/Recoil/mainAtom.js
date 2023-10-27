import { atom } from "recoil"

export const wideNavOpendState = atom({
    "key" : "wideNavOpendState",
    "default" : false
})

export const navIconStyleState = atom({
    "key" : "navIconStyleState",
    "default" : -1
})

// index 선택된 것, 이름 바꾼 것
export const iconIndexState = atom({
    "key" : "iconIndexState",
    "default" : 0
})

// index로 바꾸기
export const videoBorderStyleState = atom({
    "key" : "videoBorderStyleState",
    "default" : -1
})

// 백엔드 state 별도의 파일 분리
export const navDataState = atom({
    "key" : "navDataState",
    "default" : []
})

export const videoDataState = atom({
    "key" : "videoDataState",
    "default" : []
})