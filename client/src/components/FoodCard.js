import React from 'react'

import { StyledFoodCard } from '../StyledComps'

const FoodCard = ({ food }) => {
    return (
        <StyledFoodCard>
            <h2>{food.name}</h2>
            <p>Course: {food.course}</p>
            <p>Technique: {food.technique}</p>
            <div>
                Ingredients:
                {food.ingredients.map((ing, index) => (
                    <span key={index}> {ing},</span>
                ))}
            </div>
        </StyledFoodCard>
    )
}

export default FoodCard