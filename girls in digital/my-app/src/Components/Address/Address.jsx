import React from 'react'
import './Address.scss'
import img1 from '../../img/Address/mdi_web.png'
import img2 from '../../img/Address/Vector (1).png'
import img3 from '../../img/Address/ic_baseline-email.png'
import img4 from '../../img/Address/carbon_location-filled.png'

export default function Address() {
  return (
    <div className='address'>
        <div className="container">
            <div className="address__inner">
                <div className="mazil">
                    <div className="sayt">
                        <img src={img1} alt="" />
                        <div className="text">
                            <p className='text-1'>Веб сайт</p>
                            <p className='text-2'>digitalcity.uz</p>
                        </div>
                    </div>
                    <div className="sayt">
                        <img className='img2' src={img2} alt="" />
                        <div className="text">
                            <p className='text-1'>Телефон</p>
                            <p className='text-2'>+99874 222-22-22</p>
                        </div>
                    </div>
                    <div className="sayt">
                        <img className='img3' src={img3} alt="" />
                        <div className="text">
                            <p className='text-1'>Почта</p>
                            <p className='text-2'>dcity@info.com</p>
                        </div>
                    </div>
                    <div className="sayt">
                        <img className="img4" src={img4}  alt="" />
                        <div className="text">
                            <p className='text-1'>Адресс</p>
                            <p className='text-3'>улица Бобур Шох, Andizhan, Узбекистан</p>
                        </div>
                    </div>
                </div>
                <div className="karta">
                    
                </div>
            </div>
        </div>
    </div>
  )
}
