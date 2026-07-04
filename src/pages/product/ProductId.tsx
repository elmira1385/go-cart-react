import React from 'react'
import { useParams } from 'react-router'
import { useProducts } from '../../api'

const ProductId = () => {
   const{ProductId}= useParams()
   const{data}=useProducts()
   const item=data?.find((item)=>(item.id===Number(ProductId)))
  return (
    <div key={item?.id}>{item?.title}</div>
  )
}

export default ProductId