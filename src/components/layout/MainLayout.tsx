import React from 'react'
import { Outlet } from 'react-router'
import BannerDisCount from '../ui/BannerDisCount'
import Header from '../ui/Header'

const MainLayout = () => {
  return (
    <div>
        <BannerDisCount/>
        <Header/>
        <main className='flex flex-col gap-4 p-6'>
          <Outlet/>
        </main>
    </div>
  )
}

export default MainLayout