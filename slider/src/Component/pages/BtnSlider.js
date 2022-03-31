import React from 'react';
import './slider.css';
import leftArrow from '../../assets/icons/left-arrow.svg'
import rightArrow from '../../assets/icons/right-arrow.svg';



export default function BtnSlider({direction,moveSlide}) {
  return (
    <div className='BtnSlider'
     >
      <button
      onClick={moveSlide} 
      className={direction === "next" ? "btn-slide next": "btn-slide prev"}
      >
         <img src={direction === "next" ? rightArrow:leftArrow}/>

      </button>
    </div>
  )
}
