import React from 'react'
import { useNavigate } from 'react-router'
import { useGetCategoryFoodQuery } from '../features/mealApi';



const Homepages = () => {
  const { data, isError, error, isLoading } = useGetCategoryFoodQuery();





  const nav = useNavigate();


  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_lit5uqwc.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }
  console.log(data)


  return (
    <div className=' grid bg-brown-300 grid-cols-3 gap-7 p-5 items-start  msm:grid-cols-1 mmd:grid-cols-2'>
      {data.categories.map((meal) => {
        return <div
          onClick={() => nav(`/meals/detail/${meal.strCategory}`)}
          key={meal.idCategory} className='space-y-5 shadow-2xl cursor-pointer'>
          <h1 className='text-2xl font-bold tracking-wider'
          >{meal.strCategory}</h1>
          <img src={meal.strCategoryThumb} alt="" />
          <p>{meal.strCategoryDescription.substring(0, 150) + '....'}</p>





        </div>




      })}
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Zi0enJjKZBg" frameborder="0" allowfullscreen></iframe>

      </div>




    </div >


  )

}

export default Homepages