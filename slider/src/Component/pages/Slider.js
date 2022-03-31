import React,{useState} from 'react'
import './slider.css';
import dataSlider from './Dataslider';
import BtnSlider from './BtnSlider';



export default function Slider() {

  const[sliderIndex,setSliderIndex]=useState(1);


  const nextSlide=()=>{
      if(sliderIndex !== dataSlider.length){
        setSliderIndex(sliderIndex+1);
         
      }
      else if(sliderIndex === dataSlider.length){
        setSliderIndex(1); 
      }
  }

  const prevSlider=()=>{
      if(sliderIndex !== 1){
        setSliderIndex(sliderIndex-1);

      }else if(sliderIndex === 1){
         setSliderIndex(dataSlider.length);

      }
  }

const moveDot =index =>{
  setSliderIndex(index);
}
  return (
    <div className='container-slider'>
         {dataSlider.map((obj,index)=>{
             return(
                 <div key={obj.id} 
                 className={sliderIndex===index+1 ? "slide active-anim" : "slide"}>

                 <img src={process.env.PUBLIC_URL+`image-slider/image${index+1}.png`}/>


                 
                 </div>
             )
         })}

         <BtnSlider moveSlide={nextSlide} direction={"next"}/>
         <BtnSlider moveSlide={prevSlider} direction={"prev"}/>

         <div className='container-dots'>
           {Array.from({length:6}).map((item,index)=>(
             <div
             onClick={()=> moveDot(index+1)}
             className={sliderIndex === index+1 ? "dot active" : "dot"}>

               
               </div>
           ))}

           </div>


    </div>
  )
}
