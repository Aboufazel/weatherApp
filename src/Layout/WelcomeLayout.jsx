import './Layout.style.scss'
import WelcomePic from '../assets/pic/icon2.png'
const WelcomeLayout = () => {
  return(
      <div className={'welcomeLayout'}>
          <div>
              <img src={WelcomePic}/>
          </div>
          <div>
            <h3>
                {'به برنامه آب و هوای ابوفاضل خوش آمدید'}
            </h3>
          </div>
          <div>
              <h5 style={{textShadow:"0 0 5px black"}}>ویژگی های برنامه</h5>
              <ul>
                  <li>مشاهده وضعیت ده استان</li>
                  <li>پیش بینی آب و هوای 4 روز آینده</li>
                  <li>جزئیات آب هوای روزانه</li>
              </ul>
          </div>
          <div>
              <h4 style={{textAlign:"center"  , textShadow:"0 0 5px black"}}>
                  {'برای مشاهده وضعیت هر استان میتوانید از منو بالا اقدام به مشاهده نمایید'}
              </h4>
          </div>
      </div>
  )
}


export default WelcomeLayout;