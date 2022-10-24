import sunny from "../../assets/pic/MostlySunnyDay.svg";
import Container from "../container/Container";
import './StatusCard.scss'



const StatusCard = ({api}) => {
    try{
        return(
            <Container>
                <div className={"statusCard"}>
                    <div className={'leftSide'}>
                        <div>
                            <h3>
                                {api.city.name}
                            </h3>
                        </div>
                        <div>
                            <img src={sunny}/>
                        </div>
                        <div>
                            <h5>
                                {api.list[0].weather[0].description}
                            </h5>
                        </div>
                        <div>
                            <span>{new Date().toLocaleTimeString()}</span>
                        </div>
                        <div className={"tempInfo"}>
                          <span>
                              دمای هوا
                              <span style={{padding: 5}}>
                                  {(Math.floor((api.list[0].main.temp) - 273))}
                              </span>
                              درجه سانتی گراد
                          </span>
                        </div>
                    </div>
                    <div className={'rightSide'}>
                        <h3>
                            {'وضعیت هوای امروز'}
                        </h3>
                        <div className={'rightSide__topBox'}>
                            <div className={'rightSide__topBox__info'}>
                              <span className={'hotColor'}>
                                  بیشترین دما
                              </span>
                                <div>
                                    {Math.floor((api.list[0].main.temp_max) - 273)}
                                </div>
                            </div>
                            <div className={'rightSide__topBox__info'}>
                              <span className={'coldColor'}>
                                  کمترین دما
                              </span>
                                <div>
                                    {Math.floor((api.list[0].main.temp_min) - 273)}
                                </div>
                            </div>
                            <div className={'rightSide__topBox__info'}>
                              <span className={'humidityColor'}>
                                  رطوبت هوا
                              </span>
                                <div>
                                    {(api.list[0].main.humidity)}
                                </div>
                            </div>
                            <div className={'rightSide__topBox__info'}>
                              <span className={'windColor'}>
                                  سرعت باد
                              </span>
                                <div>
                                    {(api.list[0].wind.speed)}
                                </div>
                            </div>
                        </div>
                        <div className={'rightSide__bottomBox'}>
                            <h4>
                                {'وضعیت چهار روز آینده'}
                            </h4>
                            <div className={'feuRow'}>
                                <div className={'feuBox'}>
                                    <div>
                                        <img src={Sunny}/>
                                    </div>
                                    <div className={'feuInfo'}>
                                      <span>
                                          {api.list[1].weather[0].description}
                                      </span>
                                        <div>
                                                                                   <span>
                                           دمای هوا :
                                          <span>
                                              <span style={{marginRight: 5 , marginLeft:5}}>
                                                  {(Math.floor((api.list[1].main.temp) - 273))}
                                              </span>
                                              درجه سانتی گراد
                                          </span>
                                      </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={'feuBox'}>
                                    <div>
                                        <img src={Sunny}/>
                                    </div>
                                    <div className={'feuInfo'}>
                                      <span>
                                          {api.list[2].weather[0].description}
                                      </span>
                                        <div>
                                                                                   <span>
                                           دمای هوا :
                                          <span>
                                              <span style={{marginRight: 5 , marginLeft:5}}>
                                                  {(Math.floor((api.list[2].main.temp) - 273))}
                                              </span>
                                              درجه سانتی گراد
                                          </span>
                                      </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={'feuBox'}>
                                    <div>
                                        <img src={Sunny}/>
                                    </div>
                                    <div className={'feuInfo'}>
                                      <span>
                                          {api.list[3].weather[0].description}
                                      </span>
                                        <div>
                                            <span>
                                           دمای هوا :
                                          <span style={{marginRight: 5}}>
                                              <span style={{marginRight: 5 , marginLeft:5}}>
                                                  {(Math.floor((api.list[3].main.temp) - 273))}
                                              </span>
                                              درجه سانتی گراد
                                          </span>
                                      </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={'feuBox'}>
                                    <div>
                                        <img src={Sunny}/>
                                    </div>
                                    <div className={'feuInfo'}>
                                      <span>
                                          {api.list[4].weather[0].description}
                                      </span>
                                        <div>
                                                                                 <span>
                                           دمای هوا :
                                          <span style={{marginRight: 5}}>
                                              <span style={{marginRight: 5 , marginLeft:5}}>
                                                  {(Math.floor((api.list[4].main.temp) - 273))}
                                              </span>
                                              درجه سانتی گراد
                                          </span>
                                      </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }catch (err){
        console.log('صفحه در حال دریافت اطلاعات شهر است')
    }

}

export default StatusCard;


