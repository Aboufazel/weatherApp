
import CityBox from "./cityBox";
import Container from "../container/Container";
import {city} from "../../getapi/Database";
const CityRow = () => {
  return(
      <Container>
         <div className={"cityRow"}>
             {
                 city.map(item =>(
                     <div key={item.id}>
                         <CityBox name={item.title}/>
                     </div>
                 ))
             }
         </div>
      </Container>
  )
}



export default CityRow;