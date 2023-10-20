import styled from "styled-components"

export const Nav = styled.nav`
    display: inline-flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #FFFFFF;
    padding-top: ${props => props.paddingTop || "10px"};
    padding-left: 10px;
    margin-top: 50px;
    align-items: center;
    z-index: ${props => props.zIndex || null};

    @media screen and (max-width: 800px) {
        display: none;
    }
`
export const Div = styled.div`

    font-size: 13px;
    padding-top: 15px;
    padding-bottom: 15px;

    border-radius: ${props =>
        props.wideNavOpened
            ? (props.navIconStyle ? '10px' : '0px')
            : (props.navIconStyle ? '10px' : '0px')
    };
    background-color: ${props =>
        props.wideNavOpened
            ? (props.navIconStyle ? '#dbdcdb' : '#ffffff')
            : (props.navIconStyle ? '#dbdcdb' : '#ffffff')
    };
    width: ${props =>
        props.wideNavOpened
            ? (props.navIconStyle ? '160px' : '160px')
            : (props.navIconStyle ? '68px' : '68px')
    };
    
    ${props => calFlex(props.wideNavOpened)};
`
export const Button = styled.button`
    background-color: transparent;
    border: none;
`
export const Img = styled.img`
    width: 25px;
`
export const P = styled.p`
    margin: 0;
`
const calFlex = (wideNavOpened) => {
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
// const calFlex = (type) => {

//     switch (type) {
//         case "wideNav_opened":
//             return`
//                 display: flex;
//                 align-items: center;
//             `
//         case "wideNav_closed":
//             return`
//                 display: flex;
//                 flex-direction: column;
//                 align-items: center;
//             `
//     }
    
// }

// padding-left: ${props =>
//     props.wideNavOpened
//         ? (props.navIconStyle ? null : null)
//         : (props.navIconStyle ? '10px' : '10px')
// };
// padding-right: ${props =>
//     props.wideNavOpened
//         ? (props.navIconStyle ? null : null)
//         : (props.navIconStyle ? '10px' : '10px')
// };
// margin-right: ${props =>
//     props.wideNavOpened
//         ? (props.navIconStyle ? null : null)
//         : (props.navIconStyle ? '10px' : '10px')
// };