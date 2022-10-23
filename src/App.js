
import './App.css';


import CityRow from "./components/city/cityRow";
import {Data} from "./getapi/data";

function App() {
  return (
    <div className="App">
        <CityRow/>
        <Data/>
    </div>
  );
}

export default App;
