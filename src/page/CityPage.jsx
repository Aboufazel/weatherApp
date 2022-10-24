import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import StatusCard from "../components/statusCard/statusCard";


const CityPage = () => {
    const state = useSelector(state => state.action)
    const [url , setUrl] = useState({})
    const select = []
    const {cityId} = useParams()

    useEffect(() => {
        const currentCity = state.filter( item => item.id === Number(cityId))[0]
        select.push(currentCity.url)

    }, [])

    useEffect(()=>{
       try {
           fetch(`${select}`)
           .then(response => response.json())
               .then(data => setUrl(data))
       }catch (err){

       }
    } , [])
    try {
        return(
            <StatusCard api={url}/>
        )
    }catch (err){

    }
}


export default CityPage;