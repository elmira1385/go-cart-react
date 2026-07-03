import React from 'react'
import TamplateTitleOfProducts from './TamplateTitleOfProducts'
import TamplateOfProducts from './TamplateOfProducts'
import { useProducts } from '../../api';

const LatestProducts = () => {
  const { data } = useProducts();
  const latestData=data?.slice(0,4)
  return (
    <div className='flex flex-col gap-10'>
        <TamplateTitleOfProducts title='Latest Products' count="4"/>
        <TamplateOfProducts product={latestData} />
    </div>
  )
}

export default LatestProducts