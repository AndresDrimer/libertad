import React from 'react'

function InfiniteSlider() {
  return (
    <section>
    
<div className="slider bg-white h-250 mx-auto overflow-hidden relative w-1140">
  <div className="slider::before bg-gradient-to-r from-white via-transparent w-100 h-full absolute z-2"></div>
  <div className="slider::after bg-gradient-to-l from-white via-transparent w-100 h-full absolute z-2 right-0 top-0 transform rotate-180"></div>
  <div className="slider .slide-track animate-scroll linear infinite flex w-4500">
    <div className="slide h-250 w-250 bg-yellow-500"></div>
    <div className="slide h-250 w-250 bg-coral-500"></div>
    <div className="slide h-250 w-250 bg-blue-500"></div>
    <div className="slide h-250 w-250 bg-red-500"></div>
    <div className="slide h-250 w-250 bg-orange-500"></div>
    <div className="slide h-250 w-250 bg-purple-500"></div>
    <div className="slide h-250 w-250 bg-pink-500"></div>
    <div className="slide h-250 w-250 bg-navy-500"></div>
    <div className="slide h-250 w-250 bg-lime-500"></div>
    <div className="slide h-250 w-250 bg-yellow-500"></div>
    <div className="slide h-250 w-250 bg-coral-500"></div>
    <div className="slide h-250 w-250 bg-blue-500"></div>
    <div className="slide h-250 w-250 bg-red-500"></div>
    <div className="slide h-250 w-250 bg-orange-500"></div>
    <div className="slide h-250 w-250 bg-purple-500"></div>
    <div className="slide h-250 w-250 bg-pink-500"></div>
    <div className="slide h-250 w-250 bg-navy-500"></div>
    <div className="slide h-250 w-250 bg-lime-500"></div>
  </div>
</div>

</section>)
}

export default InfiniteSlider