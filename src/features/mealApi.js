import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Search from '../pages/Search';



export const mealApi = createApi({
  reducerPath: 'mealApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1' }),
  endpoints: (builder) => ({

    getCategoryFood: builder.query({
      query: () => ({
        url: '/categories.php',
        method: 'GET'
      })

    }),
    mealBYID: builder.query({
      query: (query) => ({
        url: '/filter.php',
        method: 'GET',
        params: {
          c: query
        }
      })

    }),



    mealId: builder.query({
      query: (query) => ({
        url: '/lookup.php',
        method: 'GET',
        params: {
          i: query
        }
      })
    }),

    mealCata: builder.query({
      query: (id) => ({
        url: '/filter.php',
        method: 'GET',
        params: {
          c: id
        }
      })
    }),
    SearchMeal: builder.query({

      query: (search) => ({
        url: '/search.php',
        method: 'GET',
        params: {
          s: search
        }
      })









    }),








  })
});

export const {
  useGetCategoryFoodQuery, useMealBYIDQuery,
  useGetRandomFoodQuery, useMealIdQuery, useMealCataQuery, useSearchMealQuery
}
  = mealApi;