import React from 'react'
import logoImg from '../../assets/images/logo.png'
import{navData} from '../../dummyData/navData'

const Navbar = () => {
  return (
    <>
      <div className="max-w-customContainer mx-auto h-[110px]">
        <div className="flex">
          <div>
            <img src={logoImg} alt="Logo" className="w-50" />
          </div>
         <div>
         <div>
            <ul className='flex'>
              {navData.map((nav) =>(
                <li key={nav.id}>
                  <a href={nav.url}>
                  {nav.title}
                  </a>
                </li>
              ))}
            </ul> 
          </div>
          <div></div>
         </div>
        </div>
      </div>
    </>


            
  )
}

export default Navbar