import React from 'react'
import './About.scss'
import image1 from '../../img/About/image 6.png'
import image2 from '../../img/About/image 7.png'

export default function About() {
  return (
    <div className='About'>
      <div className="container">
        <div className="About__inner">
            <h2>О проекте</h2>
            <div className="About__info1">
              <img src={image1} alt="" />
              <p>Проект осуществляется в 4 этапа. Отбор участников проводится на основе специального анкетирования,собесодование а также анкетирование возможно на сайте проекта в режиме он-лайн. также собеседования с участием тренеров и специалистов. Привлечение участников будет производиться посредством рекламной кампании в ТВ, интернет и печатной СМИ.</p>
            </div>

            <div className="About__info2">
              <p>Проект “Программа обучения девушек в сфере И.Т ”  предназначен для девушек в возрасте 16-35 ,которые имеет базовые знание в сфере айти.</p>
              <img src={image2} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
