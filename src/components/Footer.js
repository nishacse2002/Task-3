import React from 'react'

const Footer = () => {
  return (
    <div className='flex bg-amber-900  text-black
      h-[80px] px-8 py-8'>


      <div className='flex items-center text-center px-[5px]  '>

        <h4 className='px-8'>&copy; 2023 TheMealDB
        </h4>

        <div className='flex space-x-2'><h4>Proudly built in the UK</h4> <img src="https://www.themealdb.com/images/icons/flags/big/16/gb.png" alt="" /></div>

        <div className='flex items-center text-center px-[200px] py-[50px] '>



          <h1 className=''> <img img src="https://www.themealdb.com/images/logo-tcdb.png " alt="" /></h1>
          <h2 className=''><img src="https://www.themealdb.com/images/logo-tadb.png" alt="" /></h2>
          <h3><img src="https://www.themealdb.com/images/logo-tsdb.png" alt="" /></h3>
        </div>


      </div>








    </div>
  )
}

export default Footer
