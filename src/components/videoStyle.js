import styled from "styled-components"

export const Main = styled.main`
    padding-top: 90px;
    padding-left: 75px;

    ${props => calFlex(props.flex)};
`
export const Section = styled.section`
    padding: 7px;

    ${props => calFlex(props.flex)};
`
export const Img = styled.img`
    width: ${props => props.Width || null};
    height: ${props => props.Height || null};
    margin-top: ${props => props.marginTop || null};

    border-radius: ${props =>
        props.borderRadius ? props.borderRadius : (props.videoBorderStyle ? "0px" : "20px")
    };
`
export const Div = styled.div`
    width: ${props => props.Width || null};
    margin-top: ${props => props.marginTop || null};

    ${props => calFlex(props.flex)};
`
export const P = styled.p`
    margin: 0;

    font-size: ${props => props.fontSize || null};
    color: ${props => props.Color || null};
`
export const Span = styled.span`
    font-size: 13px;
    color: grey;
    margin-right: ${props => props.marginRight || null};
`
const calFlex = (type) => {
    switch(type) {
        case "row":
            return`
                display: flex;
            `
        case "row_wrap":
            return`
                display: flex;
                flex-wrap: wrap;
            `
        case "section":
            return`
                flex-grow: 1;
                flex-basis: 330px;
            `
    }
}

// border-radius: ${props => props.borderRadius || null};
//     border-radius: ${props =>
//         props.videoBorderStyle
//             ? "0px"
//             : "20px"
//     };