import styled from "styled-components"

export const Header = styled.header`
    width: 96%;
    height: 56px;
    top: 0px;
    background-color: #FFFFFF;
    padding-left: 16px;
    padding-right: 20px;

    ${props => calFlex(props.flex)}
`
export const Div = styled.div`
    flex-basis: ${props => props.flexBasis ||}
    ${props => calFlex(props.flex)}
`
export const Button = styled.button`
    background-color: ${props => props.backgroundColor || "transparent" };
    border: none;
    border-radius: ${props => props.borderRadius || null};
    height: ${props => props.height || null};
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
                justfiy-content: space-between;
            `
        case "row_center":
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
// }
/* start */
#start {
    display: flex;
    align-items: center;
}
#center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 800px;
}
#end {
    display: flex;
    align-items: center;
}
.hicon {
    width: 30px;
    margin-right: 10px;
}
#ytbicon {
    width: 140px;
    height: 27px;
}
/* center */
#search {
    height: 38px;
    width: 50%;
    border-radius: 40px 0 0 40px;
}
@media screen and (max-width: 500px) {
    #search {display: none;}
}
#micicon {
    width: 45px;
}
/* end */
#pficon {
    border-radius: 50%;
    width: 40px;
    height: 40px;
}
@media screen and (max-width: 800px) {
    nav {display: none;}
}