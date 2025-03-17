import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Theme = ({children}:{children:React.ReactNode}) => {
  return (
    <React.Fragment>
        <Header/>
        <main className='w-full min-h-screen border-2' >
        {children}
        </main>
        <Footer/>
    </React.Fragment>
  )
}

export default Theme