import React from 'react'
import Card from '../Card/Card'
import './Direction.scss'

export default function Direction() {
  return (
    <div className='Direction'>
      <div className="container">
        <div className="Direction__inner">
            <div className="Direction__text">
                <h2>Направлении</h2>
                <p>Проект будет проводится по направлениям</p>
            </div>
            <div className="crads">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <button className='sing'>Записаться</button>
        </div>
      </div>
    </div>
  )
}
