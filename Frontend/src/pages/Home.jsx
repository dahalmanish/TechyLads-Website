import React from 'react'
import Heading from '../components/section/Heading'
import Partner from '../components/section/Partner'
import Record from '../components/section/record'
import Testimonials from '../components/section/Review'
import Product from './Product'
import Services from './Services'



const Home = () => {
  return (
    <div className='font-Outfit'>
      <div>
       <Heading/>
      </div>
       <div>
       <Partner/>
       </div>
      <div>
      <Record/>
      </div>
     
      <div>
        <Services/>
      </div>
      <div>
        <Product/>
      </div>
      <div>
        <Testimonials/>
      </div>
      {/* <div>
        <Grid/>
      </div> */}
    </div>
    
  )
}

export default Home
