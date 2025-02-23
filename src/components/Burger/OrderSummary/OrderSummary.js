import React from 'react'
import Button from '../../UI/Button/Button'

function OrderSummary(props) {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>
                        {igKey}: {props.ingredients[igKey]}
                    </span>
                </li>)
        })
    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: $ {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>

            <Button
                btnType='Danger'
                clicked={props.purchaseCancelled}
            >CANCEL</Button>
            <Button
                btnType='Success'
                clicked={props.purchaseContinued}
            >CONTINUE</Button>
        </>
    )
}

export default OrderSummary;
