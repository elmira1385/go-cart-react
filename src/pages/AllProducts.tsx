import React from 'react'
import { useProducts } from '../api'
import TamplateOfProducts from '../components/ui/TamplateOfProducts'

const AllProducts = () => {
    const{data}=useProducts()
  return (
   <div className='flex flex-col gap-6 p-6'>
        <p className='text-t-slate-700 font-medium text-2xl'>All Products</p>
        <TamplateOfProducts product={data} />
    </div>
  )
}

export default AllProducts