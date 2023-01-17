import React from 'react'
import './Results.scss'
import img1 from '../../img/results/Group 133.png'
import img2 from '../../img/results/Mask group (4).png'
import img3 from '../../img/results/Mask group (3).png'
import img4 from '../../img/results/Mask group (5).png'
import img5 from '../../img/results/Mask group (6).png'

export default function Results() {
  return (
    <div className='results'>
        <div className="container">
            <div className="results__inner">
                <div className="results__text">
                    <h2>Результаты</h2>
                    <p>Ожидаемый результат: Подготовка квалифицированных и конкурентоспособных  кадров и разработка стартапп проектов и  среди девушек</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={img1} alt="" />
                        <p>Самореализация девушек в сфере IT</p>
                    </div>
                    <div className="card">
                        <img src={img2} alt="" />
                        <p className='p2'>Выбор профессии без квалификациии дипломов</p>
                    </div>
                    <div className="card">
                        <img src={img3} alt="" />
                        <p className='p2'>Возможность зарабатывать дистанционно (фриланс)</p>
                    </div>
                    <div className="card">
                        <img src={img4} alt="" />
                        <p className='p4'>Возможность начать свои социальные проекты в виде Старт апов</p>
                    </div>
                    <div className="card">
                        <img src={img5} alt="" />
                        <p className='p2'>Возможность начать свои социальные проекты в виде Старт апов</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
