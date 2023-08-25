//Used instead of css
import {createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle`
body{
place-items: center;
height:100vh;
background-color: ${({theme}) => theme.color.mycolor};
display:grid;
}
`

