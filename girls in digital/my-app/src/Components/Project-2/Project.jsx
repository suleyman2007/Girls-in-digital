import React from 'react'
import './Project.scss'
import img1 from '../../img/Project/image 8.png'
import img2 from '../../img/Project/image 9.png'

export default function Project() {
  return (
    <div className='Project'>
        <div className="container">
            <div className="project__inner">
                <div className="project__inner-pro1">
                    <img src={img1} alt="" />
                    <p>Проект осуществляется в 4 этапа. Отбор участников проводится на основе специального анкетирования,собесодование а также анкетирование возможно на сайте проекта в режиме он-лайн. также собеседования с участием тренеров и специалистов. Привлечение участников будет производиться посредством рекламной кампании в ТВ, интернет и печатной СМИ.</p>
                </div>
                <div className="project__inner-pro2">
                    <p>Рабочая группа будет состоят из высококвалифицированных тренеров-специалистов. Для полного информирования участников проекта требуется освещение через СМИ, разработка сайта и создание PR-группы. Рабочей группой будут разработаны модули, программы направлений  в проекте. </p>
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
