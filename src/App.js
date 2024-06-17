import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import HeaderSection from './components/HeaderSection'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import data from './data/Data';
import Icons from './components/Icons'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Navbar/>
      <div className='w-full p-[92px_0px_52px] bg-[var(--body)]'>
        <Header />
        <HeaderSection title={data.nav.nav_2} name={'experience'}/>
        <Experience/>
        <HeaderSection title={data.nav.nav_3} name={'skills'}/>
        <Skills/>
        <HeaderSection title='Portfolio' name={'work'}/>
        <Portfolio/>
        <HeaderSection title='Contacts' name={'contact'}/>
        <Icons/>
      </div>
      <Footer/>
    </>
  )
}

export default App