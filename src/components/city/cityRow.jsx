
import CityBox from "./cityBox";
import Container from "../container/Container";
import {city} from "../../getapi/Database";
import {Link} from "react-router-dom";
const CityRow = () => {
    return(
      <Container>
         <div className={"cityRow"}>
             {
                 city.map(item =>(
                            <Link to={`city/${item.id}`}key={item.id}>
                                <div>
                                    <CityBox name={item.title}/>
                                </div>
                            </Link>
                 ))
             }
         </div>
      </Container>
  )
}



export default CityRow;