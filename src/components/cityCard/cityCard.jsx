import {useEffect, useState} from "react";


const Data = [
    {id:1 , title:"شیراز"  ,url:"http://api.openweathermap.org/data/2.5/forecast?q=Shiraz&appid=f898a01cb767dadc59a75af67043dfaa&lang=fa"},
    {id:2 , title:"تهران"   ,url:"http://api.openweathermap.org/data/2.5/forecast?q=Tehran&appid=f898a01cb767dadc59a75af67043dfaa&lang=fa"},
    {id:3 , title:"اصفهان"  ,url:"http://api.openweathermap.org/data/2.5/forecast?q=Esfahan&appid=f898a01cb767dadc59a75af67043dfaa&lang=fa"},
    {id:4 , title:"تبریز"  ,url:"http://api.openweathermap.org/data/2.5/forecast?q=Tabriz&appid=f898a01cb767dadc59a75af67043dfaa&lang=fa"},
    {id:5 , title:"مشهد"  ,url:"http://api.openweathermap.org/data/2.5/forecast?q=Mashhad&appid=f898a01cb767dadc59a75af67043dfaa&lang=fa"},
    {id:6 , title:"کیش"  ,url:"http://api.openweathermap.org/data/2.5/forecast?q=Kish&appid=f898a01cb767dadc59a75af67043dfaa&lang=fa"},
    {id:7 , title:"قم"  ,url:"http://api.openweathermap.org/data/2.5/forecast?q=Qom&appid=f898a01cb767dadc59a75af67043dfaa&lang=fa"},
    {id:8 , title:"سمنان"  ,url:"http://api.openweathermap.org/data/2.5/forecast?q=Semnan&appid=f898a01cb767dadc59a75af67043dfaa&lang=fa"},
    {id:9 , title:"گرگان"  ,url:"http://api.openweathermap.org/data/2.5/forecast?q=Gorgan&appid=f898a01cb767dadc59a75af67043dfaa&lang=fa"},
    {id:10 , title:"یزد"  ,url:"http://api.openweathermap.org/data/2.5/forecast?q=Yazd&appid=f898a01cb767dadc59a75af67043dfaa&lang=fa"},
]

const CityCard = () => {
    const [api, setApi] = useState([]);


    useEffect(() => {
        Data.map(item => (
            fetch("http://api.openweathermap.org/data/2.5/forecast?q=Shiraz&appid=f898a01cb767dadc59a75af67043dfaa&lang=fa")
                .then(res => res.json())
                .then(data => setApi(data))
        ))
    }, [])
    try {
        return (
            <div>
                Hello
            </div>
        )
    } catch (err) {
        console.log("صفحه در حال به روز رسانی اطلاعات است")
    }
}


export default CityCard;