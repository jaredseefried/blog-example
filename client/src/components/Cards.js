import React from 'react'
import './Cards.css'

function Cards(props) {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} target="_blank" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default Cards