import { useState , useEffect} from "react";




export const Data = ()=>{
   const [api , setApi] = useState([])

    useEffect(()=> {
        console.log("Effect ran")
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=Shiraz%20&limit=5&appid=f898a01cb767dadc59a75af67043dfaa")
            .then(res => res.json())
            .then(data => setApi(data))
    }, [])
    return(
        <div>
            {api.map(city => (
                <div>
                    {city.local_names.ar}
                </div>
            ))}
        </div>
    )
}