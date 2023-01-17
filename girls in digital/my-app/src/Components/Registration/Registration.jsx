import React from 'react'
import './Registration.scss'

export default function Registration() {
  return (
    <div className='Registration'>
        <div className="container">
            <div className="Registration__inner">
                <h2>Регистрация</h2>
                <div className="inpuyts">
                    <div className="inputs__name input">
                        <p>Имя</p>
                        <input type="text" />
                    </div>
                    <div className="inputs__Surname input">
                        <p>Фамилия</p>
                        <input type="text" />
                    </div>
                    <div className="inputs__DateBirth input">
                        <p>Дата рождения</p>
                        <input type="text" />
                    </div>
                    <div className="inputs__Mail input">
                        <p>Почта</p>
                        <input type="email" />
                    </div>
                    <div className="inputs__address input">
                        <p>Адрес</p>
                        <input type="text" />
                    </div>
                    <div className="inputs__Telephone input">
                        <p>Телефон</p>
                        <input type="number" placeholder='(+998)'/>
                    </div>
                </div>
                <button>Отправить</button>
            </div>
        </div>
    </div>
  )
}
