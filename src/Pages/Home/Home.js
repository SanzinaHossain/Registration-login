import React from 'react'
import index from "../../images/index.jpg"
const Home = () => {
  return (
    <div class=" w-full hero" style={{backgroundImage:`url(${index})`,height:"443px"}}>
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-6xl font-bold text-white">Welcome</h1>
        <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button class="btn btn-outline hover:btn-info text-white">Get Ready</button>
      </div>
    </div>
  </div>
  )
}

export default Home