
import styled, {ThemeProvider} from 'styled-components'
import { GlobalStyle } from './styles/globalstyle';
import CustomButtonExport from "./components/customebutton";
import "./App.css";


function App() {

  //let mycolor = "red";  
  //Replace variable with theme provider

  const theme =  {
    color:{
      mycolor: "red",
      imagecolor: "blue"
    },

    screenssizes:{
      mobileS: "(min-width: 320px)"
    }

  }

  const Test = styled.div `
  .button-56{
    align-items: center;
    background-color: #fee6e3;
    border: 2px solid #111;
    border-radius: 8px;
    box-sizing: border-box;
    color: #111;
    cursor: pointer;
    display: flex;
    font-family: Inter,sans-serif;
    font-size: 16px;
    height: 48px;
    justify-content: center;
    line-height: 24px;
    max-width: 100%;
    padding: 0 25px;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  p{
    color: purple;
  }

  .button-56:after {
    background-color: #111;
    border-radius: 8px;
    content: "";
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform .2s ease-out;
    z-index: -1;
  }
  
  .button-56:hover:after {
    transform: translate(0, 0);
  }
  
  .button-56:active {
    background-color: #ffdeda;
    outline: 0;
  }
  
  .button-56:hover {
    outline: 0;
  }
  
  @media (min-width: 768px) {
    .button-56 {
      padding: 0 40px;
    }
  }
  `
  const CustomButton = styled.button`
    align-items: center;
    background-color: ${(props) => props.bg}; 

    border: 0;
    border-radius: 10px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-family: "Codec cold",sans-serif;
    font-size: 16px;
    font-weight: 700;
    height: 54px;
    justify-content: center;
    letter-spacing: .4px;
    line-height: 1;
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 3px;
    text-decoration: none;
    text-transform: uppercase;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    
  &:active {
  outline: 0;
  }

  &:hover {
  outline: 0;
  color: purple;
  }

  span{
     color:purple;

     &:hover{
      color:${({theme}) => theme.color.mycolor};
     }
  }

  `
  return (
   
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyle/>
    <Test>
    <button class="button-56" >Click here</button>
    <p>I am Para</p>
    <CustomButton bg="green "> Click Me again <span>comment</span></CustomButton>
    </Test>

    <CustomButtonExport bg="orange">helo</CustomButtonExport>
    </>
    </ThemeProvider>
  );


}

export default App;
