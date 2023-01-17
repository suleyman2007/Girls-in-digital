import React from 'react'
import './Tasks_card.scss'


export default function Tasks_card() {
  return (
    <div className='Tasks_card'>
        <div className="card">
            <div className="block">
                <p className='number_card'>01</p>
            </div>
            <p className='text_card'>Подбор рабочей группы</p>
        </div>
        <div className="card">
            <div className="block">
                <p className='number_card'>02</p>
            </div>
            <p className='text_card'>Установить контакт с партнерами</p>
        </div>
        <div className="card">
            <div className="block">
                <p className='number_card'>03</p>
            </div>
            <p className='text_card'>Закупка офисной техники</p>
        </div>
        <div className="card-4 card">
            <div className="block">
                <p className='number_card'>04</p>
            </div>
            <p className='text_card'>Привлечение опытных специалистов (зарубежные специалисты);</p>
        </div>
        <div className="card">
            <div className="block">
                <p className='number_card'>05</p>
            </div>
            <p className='text_card'>Разработка модуля</p>
        </div>
        <div className="card-6 card">
            <div className="block">
                <p className='number_card'>06</p>
            </div>
            <p className='text_card'>Освещение  проекта с помощью СМИ</p>
        </div>
        <div className="card-6 card">
            <div className="block">
                <p className='number_card'>07</p>
            </div>
            <p className='text_card'>Проведение отбора участников</p>
        </div>
        <div className="card-8 card">
            <div className="block">
                <p className='number_card'>08</p>
            </div>
            <p className='text_card'>Организация проекта в 4 этапа</p>
        </div>
        <div className="card-9 card">
            <div className="block">
                <p className='number_card'>09</p>
            </div>
            <p className='text_card'>Организация форума и церемония награждения победителей</p>
        </div>
        <div className="card-10 card">
            <div className="block">
                <p className='number_card'>10</p>
            </div>
            <p className='text_card'>Мониторинг деятельности участников после окончание проекта, oценка эффективности проекта, составление отчетов</p>
        </div>

    </div>
  )
}
