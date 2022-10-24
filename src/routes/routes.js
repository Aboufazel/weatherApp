import { createBrowserRouter}   from "react-router-dom";
import {RouterProvider ,} from "react-router";
import Layout from "../Layout/Layout";
import cityCard from "../components/cityCard/cityCard";
import WelcomeLayout from "../Layout/WelcomeLayout";


const Root = ()=>{

    const router = createBrowserRouter (

        [
            {path: "/",
             element: <Layout/>,
                children:[
                    {
                        path:"/",
                        element:<WelcomeLayout/>
                    }
                ]
            },
        ])
    return(
        <RouterProvider router={router}/>
    )
}



export default Root;