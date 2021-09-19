import React from 'react'
import classes from './Order.module.css'

function order(props) {

    // const ingredients = Object.keys(props.ingredients)
    //     .map(igKey => {
    //         return [...Array(props.ingredients[igKey])].map((_, i) => {
    //             return <BurgerIngredient key={igKey + i} type={igKey} />
    //         })
    //     })
    //     .reduce((arr, el) => {
    //         return arr.concat(el)
    //     }, [])

    const ingredients = []
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    const ingredientsOutput = ingredients.map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '4px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{ig.name}: {ig.amount}</span>
    })


    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price:<strong> USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default order;
