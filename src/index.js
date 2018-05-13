import React from 'react'
import ReactDOM from 'react-dom'
import Card from '~/components/card'
import '~/styles/index.scss'

const events = [
  {
    title: 'Comicon'
  },
  {
    title: 'Laracon'
  },
  {
    title: 'Drupalcon'
  },
  {
    title: 'Vue Js Con'
  }
];

ReactDOM.render(
  <div className="card-grid">
    { events.map((event, index) => <div className="card-wrapper" key={index}><Card title={event.title} /></div>) }
  </div>,
  document.getElementById('app')
)