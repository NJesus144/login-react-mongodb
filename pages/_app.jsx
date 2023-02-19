import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.css";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

${'' /* body{
  font-family:  'Roboto', sans-serif;
} */}
`;

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;

