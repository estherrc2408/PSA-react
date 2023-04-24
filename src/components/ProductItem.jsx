import React from 'react'

export const ProductItem = ({...product}) => {
  return (
    <>
      <div className='card-container'>
        <div className='card'>
          <h3 className='item-title'>{product.title}</h3>
          <div className='img-container'>
            <img className='img-sized' src={product.img} alt="podenco" />
          </div>
          <div className='info'>
            <p className='price'>Price: {product.price} $</p>
            <button className='more-info' >Más Info</button>
          </div>
        </div>
      </div>
    </>
  )
}
