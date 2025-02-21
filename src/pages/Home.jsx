import React from 'react'
import Button from '../components/Button'
import Heading from '../components/section/Heading'
import Companies from '../components/section/companies'
import Partner from '../components/section/Partner'
import Record from '../components/section/record'
import Services from './Services';
import Product from './Product';
import Testimonials from '../components/section/Review'



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
