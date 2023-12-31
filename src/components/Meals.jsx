import React from 'react'
import {BsHandThumbsUp} from 'react-icons/bs'
import { useGlobalContext } from '../Context'

const Meals=()=> {
  const {meals, loading,selectMeal,addToFavorites} = useGlobalContext();

  if(loading) {
    return <section className='section'>
      <h4>Loading...</h4>
    </section>
    
  }
  if (meals.length<1) {
    return <section className='section'>
      <h4>No meals match your search term. Please try again</h4>
    </section>
  }
  return <section className='section-center'>
    {meals.map((singleMeal) =>{
      const {idMeal, strMeal:title, strMealThumb:image}=singleMeal

      return <article key={idMeal} className='single-meal'>
      <img src={image} className='img' alt='' onClick={()=>selectMeal(idMeal)}/>
      <footer>
        <h5>{title}</h5>
        <button className='like-btn'onClick={() => addToFavorites(idMeal)}><BsHandThumbsUp/></button>
      </footer>

      </article>
    })}
  </section>
}

export default Meals;
