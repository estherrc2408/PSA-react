import React from 'react'
import {ProductItem} from './ProductItem';
import {useFetch} from '../hooks/useFetch'

export const ProductList = ({search}) => {
  const {products,isLoading}=useFetch(search);

  return (
    <>
    {products&&products.map((product)=>
      <ProductItem key={product.id}{...product}/>
    )}
    </>
  )
}
