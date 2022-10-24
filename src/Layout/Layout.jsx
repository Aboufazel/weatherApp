import Container from "../components/container/Container";
import {Outlet} from "react-router-dom"
import CityRow from "../components/city/cityRow";

const Layout = () => {

    return(
        <Container>
            <CityRow/>
            <Outlet/>
        </Container>
    )
}


export default Layout;