import {useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import StatusCard from "../components/statusCard/statusCard";


const CityPage = () => {
    const state = useSelector(state => state.action)
    const [url , setUrl] = useState({})
    const [select, setSelect] = useState({})
    const {cityId} = useParams()

    useEffect(() => {
        const currentCity = state.filter( item => item.id === Number(cityId))
        setSelect(currentCity)
    }, [])


        useEffect(()=>{
            try {
                fetch(select[0].url)
                    .then(response => response.json())
                    .then(item => setUrl(item))
            }catch (err){
                console.log(url)
            }

        } , [])
    try {
        return(
            <StatusCard api={url}/>
        )
    }catch (err){
        console.log('درحال ارسال اطلاعات شهر هستیم')
    }

}


export default CityPage;