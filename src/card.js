import React from 'react'
import './Card.css'

function Card({data}) {
  return (
    <div className= "Wrapper-info">
        
    {data.map((item) => (
      <div className= "card-info" key={item.id}>
      
        <img  src={item.thumbnail} alt={item.title} />
          <div className="card-content" >

           <h3>{item.title}</h3>
         
           </div>
      
      </div>
    ))}
  </div>
  )
}


export default Card;
