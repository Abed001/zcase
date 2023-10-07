import React from 'react'
import {useNavigate } from 'react-router-dom'


 function Product({thing}) {
    const navigate = useNavigate();
  
    function handleClick() {
      navigate("/product");
    }
  
   



  return (
    <div className='indivdual-item-container'>
      <div className='flex flex-col items-center'>
      <img class="h-100 w-100" src={thing.img} alt="" />
      <span className='bg-red-400 fw-bold text-white pr-5 pl-5'>10$</span>
      </div>
      <div  className= 'product-icons-container'>
      <i onClick={handleClick} class="fa-solid fa-cart-shopping"></i>
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-regular fa-heart"></i>
      </div>
    
      
    </div>
  )
}
export default Product;