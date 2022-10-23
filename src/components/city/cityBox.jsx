import './city.style.scss'
import shiraz from '../../assets/pic/shiraz.png'

const CityBox = ({name}) => {
  return(
      <div className={'cityBox'}>

          <img src={shiraz}/>
          <h4>{name}</h4>
      </div>
  )
}



export default CityBox;