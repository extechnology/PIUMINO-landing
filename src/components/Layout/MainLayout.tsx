import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import WhatsAppHandle from '../ui/WhatsAppHandle'
export default function MainLayout() {
  return (
    <>

    <main className='w-full h-full'>

        <Header />

        <WhatsAppHandle />

        <Outlet />

        <Footer />

    </main>
      
    </>
  )
}
