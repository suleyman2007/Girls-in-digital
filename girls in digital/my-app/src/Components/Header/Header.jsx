import React from 'react'
import './Header.scss'
import Logo from '../../img/Header/logo.svg'
import moreImg from '../../img/Header/more-img.png'

export default function Header() {
  return (
    <header className='header'>
        <div className="container">
            <div className="header__inner">
                <div className="logo-header">
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
                <div className="regs-lung">
                    <select>
                        <option value="ru">РУ</option>
                        <option value="eng">UZ</option>
                    </select>
                    <a href="#!">Регистрация</a>
                </div>
            </div>

            <div className="More">
                <div className="more__text">
                    <h2>“Girls in digital”</h2>
                    <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров</p>
                    <button>Подробнее</button>
                </div>
                <div className="more__img">
                    <img src={moreImg} alt="" />
                </div>
            </div>
        </div>
    </header>
  )
}
