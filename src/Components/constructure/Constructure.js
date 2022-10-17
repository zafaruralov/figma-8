import React from 'react'
import Body from '../Body/Body'
import Category from '../Category/Category'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { Container } from './style'

const Constructure = () => {
  return (
    <div>
        <Navbar />
        
          <Container>
             <Sidebar/>
             <div>
                 <Category/>
                 <Body/>
             </div>
           </Container>
    </div>
  )
}

export default Constructure