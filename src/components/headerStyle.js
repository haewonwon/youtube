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
export const Div = styled.div`
    flex-basis: ${props => props.flexBasis || null};
    ${props => calFlex(props.flex)};
`
export const Button = styled.button`
    background-color: ${props => props.backgroundColor || "transparent" };
    border: none;
    border-radius: ${props => props.borderRadius || null};
    height: ${props => props.height || null};
`
export const Img = styled.img`
    width: ${props => props.width || "30px"};
    height: ${props => props.height || null};
    border-radius: ${props => props.borderRadius || null};
    margin-right: ${props => props.marginRight || "10px"};
`
export const Input = styled.input`
    height: 38px;
    width: 50%;
    border-radius: 40px 0 0 40px;
    @media screen and (max-width: 500px) {
        display: none;
    }
`
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
    }
    
}