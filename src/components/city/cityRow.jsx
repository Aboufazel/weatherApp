
import CityBox from "./cityBox";
import Container from "../container/Container";
import {city} from "../../getapi/Database";
import {Link , useNavigate} from "react-router-dom";

const CityRow = () => {
    const history = useNavigate()
    const manageHistory = ()=>{
        history(0);
    }
    return(
      <Container>
         <div className={"cityRow"}>
             {
                 city.map(item =>(
                            <Link to={`city/${item.id}`}key={item.id} onClick={manageHistory()}>
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