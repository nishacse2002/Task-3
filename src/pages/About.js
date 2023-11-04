import React from 'react'

const About = () => {
  return (
    <div className='h-[100vh]  grid grid-cols-2 py-4'>
      <img src="https://www.themealdb.com/images/ingredients/Lime.png" alt="" />
      <div>
        <h1 className='text-5xl font-bold px-[150px] '>TheMealDB </h1>
        <p className='px-4 py-4 '>This is a app to discover different dishes having different ingrediants, from different cuisines and even a random dish chooser. This app uses the free meal api provided by https://www.themealdb.com/api.php and is based on the MVVM architecture.</p>

        <div className=' h-[80%] w-[80%]'><img src="https://www.gomarket.com.ng/wp-content/uploads/2020/04/fresh-lemon-805195.webp" alt="" /></div>
      </div>





    </div>
  )
}

export default About
