import React, { useState } from 'react'

import FormikForm from './components/InputForm'
import FoodCard from './components/FoodCard'

import { Container } from './StyledComps'

function App() {
  const [foods, setFoods] = useState([])

  return (
    <Container>
      <FormikForm foods={foods} setFoods={setFoods}/>

      <div>
        {foods.map((food, index) => (
          <FoodCard key={`${index}${Date.now()}`} food={food} />
        ))}
      </div>
    </Container>
  )
}

export default App
