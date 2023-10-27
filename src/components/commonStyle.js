import styled from "styled-components"

export const Header = styled.header`
    background-color: #FFFFFF;
    padding-left: 16px;
    padding-right: 20px;
    width: 96%;
    height: 56px;
    top: 0px;

    ${props => calFlex(props.flex)};
`
export const Nav = styled.nav`
    top: 0;
    left: 0;
    height: 100%;
    background-color: #FFFFFF;
    padding-top: ${props => props.paddingTop || "10px"};
    padding-left: 10px;
    margin-top: 50px;
    z-index: ${props => props.zIndex || null};
    width: ${props => props.width || null};

    ${props => calFlex(props.flex)};
    
    @media screen and (max-width: 800px) {
        display: none;
    }
`
export const Main = styled.main`
    padding-top: 90px;
    padding-left: 75px;

    ${props => calFlex(props.flex)};
`
export const Div = styled.div`
    font-size: ${props => props.fontSize || null};
    margin-top: ${props => props.marginTop || null};
    padding-top: ${props => props.paddingTop || null};
    padding-bottom: ${props => props.paddingBottom || null};
    flex-basis: ${props => props.flexBasis || null};

    border-radius: ${props => props.borderRadius || null};
    background-color: ${props => props.backgroundColor ? '#dbdcdb' : '#ffffff'};
    width: ${props => props.width || null};
    
    ${props => calFlex(props.flex)};
`
export const Button = styled.button`
    background-color: ${props => props.backgroundColor || "transparent"};
    border: none;
    border-radius: ${props => props.borderRadius || null};
    height: ${props => props.height || null};
`
export const Img = styled.img`
    width: ${props => props.width || null};
    height: ${props => props.height || null};
    border-radius: ${props => props.borderRadius ? "20px" : "0px"};
    margin-top: ${props => props.marginTop || null};
    margin-right: ${props => props.marginRight || "10px"};

    border-radius: ${props => props.borderRadius ? props.borderRadius : (props.videoBorderStyle ? "0px" : "20px") || null};
`
export const Input = styled.input`
    height: 38px;
    width: 50%;
    border-radius: 40px 0 0 40px;

    @media screen and (max-width: 500px) {
        display: none;
    }
`
export const P = styled.p`
    margin: 0;
    font-size: ${props => props.fontSize || null};
    color: ${props => props.color || null};
`
export const Section = styled.section`
    padding: 7px;

    ${props => calFlex(props.flex)};
`
export const Span = styled.span`
    font-size: 13px;
    color: grey;
    margin-right: ${props => props.marginRight || null};
`
// 전체 flex 관련 함수
const calFlex = (type) => {

    switch (type) {
        case "row":
            return`
                display: flex;
            `
        case "row_between":
            return`
                display: flex;
                justify-content: space-between;
            `
        case "row_0_center":
            return`
                display: flex;
                align-items: center;
            `
        case "row_center_center":
            return`
                display: flex;
                justify-content: center;
                align-items: center;
            `
        case "row_wrap":
            return`
                display: flex;
                flex-wrap: wrap;
            `
        case "inline_column_center":
            return`
                display: inline-flex;
                flex-direction: column;
                align-items: center;

            `
        case "section":
            return`
                flex-grow: 1;
                flex-basis: 330px;
            `
    }
    
}
// wide nav 관련 flex 함수
const wideNavOpened = (wideNavOpened) => {
    if (wideNavOpened) {
        return `
            display: flex;
            align-items: center;
        `
    } else {
        return `
            display: flex;
            flex-direction: column;
            align-items: center;
        `
    }
}