
import Container from "./components/container/Container";
import Root from "./routes/routes";
import {Provider} from "react-redux";
import {Store} from "./redux/Store";

function App() {
  return (
     <Provider store={Store}>
         <Container>
             <Root/>
         </Container>
     </Provider>
  );
}

export default App;
