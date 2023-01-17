import React from 'react'
import './Footer.scss'
import Logo from '../../img/Header/logo.svg'
import img1 from '../../img/Footer/ant-design_instagram-filled.png'
import img2 from '../../img/Footer/bi_telegram.png'
import img3 from '../../img/Footer/akar-icons_youtube-fill.png'
import img4 from '../../img/Footer/brandico_facebook-rect.png'


export default function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer__inner">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <h2>Girls in Digital </h2>
                </div>
                <nav className='nav'>
                    <ul className="nav__List">
                        <li className="List-item">
                            <a href="#!" className='active'>О Проекте</a>
                        </li>
                        <li className="List-item">
                            <a href="#!">Направления</a>
                        </li>
                        <li className="List-item">
                            <a href="#!">Задачи</a>
                        </li>
                        <li className="List-item">
                            <a href="#!">Результаты</a>
                        </li>
                        <li className="List-item">
                            <a href="#!">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div className="footer-end">
                    <div className="lung">
                        <p>УЗ</p>
                        <p className='activ'>РУ</p>
                    </div>
                    <div className="imgs">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
