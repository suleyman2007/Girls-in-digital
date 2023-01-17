import React from 'react'
import Tasks_card from '../Tasks__card/Tasks_card'
import './Tasks.scss'

export default function Tasks() {
  return (
    <div className='Tasks'>
        <div className="container">
            <div className="Tasks__inner">
                <h2 className='Tasks__text'>Задачи</h2>
            </div>
            <div className="card">
                <Tasks_card/>
            </div>
        </div>
    </div>
  )
}