import React from 'react'
import { useParams } from 'react-router'
import { useMealCataQuery, useMealIDQuery, useMealIdQuery } from '../features/mealApi';

const Detail1 = () => {
  const { id1 } = useParams();
  console.log(id1)

  const { isLoading, data, } = useMealIdQuery(id1);
  if (isLoading) {
    return <h1> isLoading...</h1>

  }
  console.log(data)
  const uId = data?.meals[0].strYoutube?.split('=');
  console.log(uId);



  return (
    <div className='bg-orange-400'>
      {
        data.meals.map((poke) => {
          return <div key={poke.idMeal}>
            <div className="title flex justify-center text-lg font-bold"><h1>{poke.strMeal}</h1></div>

            <div className="image grid grid-cols-4 p-5">
              <div className="box1 col-span-2 p-10">
                <img src={poke.strMealThumb} alt="" />
              </div>

              <div className="box2 col-span-2 text-center items-center  space-y-10">
                <div className="ingredients  font-bold text-lg ">
                  <h1 className='underline'>Ingredients</h1>
                </div>

                <div className="items grid grid-cols-2">



                  <div className="box3 space-y-10 flex flex-col items-center">
                    <p>{poke.strIngredient1}</p>
                    <p>{poke.strIngredient2}</p>
                    <p>{poke.strIngredient3}</p>
                    <p>{poke.strIngredient4}</p>
                    <p>{poke.strIngredient5}</p>
                    <p>{poke.strIngredient6}</p>
                    <p>{poke.strIngredient7}</p>
                    <p>{poke.strIngredient8}</p>
                  </div>
                  <div className="box4 space-y-10 flex flex-col items-center">
                    <p>{poke.strMeasure1}</p>
                    <p>{poke.strMeasure2}</p>
                    <p>{poke.strMeasure3}</p>
                    <p>{poke.strMeasure4}</p>
                    <p>{poke.strMeasure5}</p>
                    <p>{poke.strMeasure6}</p>
                    <p>{poke.strMeasure7}</p>
                    <p>{poke.strMeasure8}</p>
                  </div>
                </div>


              </div>

            </div>

            <div className="instructions p-5">
              <p>{poke.strInstructions}</p>
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${uId[1]}`} allowFullScreen></iframe>


            </div>
          </div>
        })
      }
    </div>
  )
}




export default Detail1
