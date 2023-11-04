import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSearchMealQuery } from '../features/mealApi';

const Search = () => {
  const { search } = useParams();
  const { data, isLoading, isError, error } = useSearchMealQuery(search);
  const nav = useNavigate();
  console.log(search)
  console.log(data)

  if (isLoading) {
    return (
      <div className='h-[400vh] w-[400px] mx-auto mt-7 ]'>
        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_lit5uqwc.json" background="transparent" speed="1" loop autoplay></lottie-player>
      </div>
    );
  }

  if (data?.meals === null) {
    return <h1 className='text-red-600 text-2xl w-[25%] mx-auto mt-20'>Try using another keyword</h1>;
  }




  if (data?.results?.length < 1) {
    return <h1 className='text-red-600 text-2xl w-[25%] mx-auto mt-20'>Try using another keyword</h1>;
  }

  return (
    <div className='grid grid-cols-4 gap-5 p-6'>
      {data.meals.map((meal) => (
        <div onClick={() => nav(`/meals/detail1/${meal.idMeal}`)} key={meal.idMeal}



          className='cursor-pointer hover:scale-105 transition-all delay-75 shadow-lg'>
          <img src={meal.strMealThumb} alt={meal.strMeal} />

          <div className='p-3 space-y-2'>
            <h1 className='text-xl font-bold'>{meal.strMeal}</h1>
            <p>{meal.strInstructions.substring(0, 150) + '...'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Search;
