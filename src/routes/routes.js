import { createBrowserRouter}   from "react-router-dom";
import {RouterProvider ,} from "react-router";
import Layout from "../Layout/Layout";
import cityCard from "../components/cityCard/cityCard";
import WelcomeLayout from "../Layout/WelcomeLayout";
import CityPage from "../page/CityPage";


const Root = ()=>{

    const router = createBrowserRouter (

        [
            {path: "/",
             element: <Layout/>,
                children:[
                    {
                        path:"/",
                        element:<WelcomeLayout/>
                    },{
                      path: "city/:cityId",
                      element: <CityPage/>
                    }
                ]
            },
        ])
    return(
        <RouterProvider router={router}/>
    )
}



export default Root;