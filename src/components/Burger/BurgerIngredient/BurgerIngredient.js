import React from 'react'
import PropTypes from 'prop-types'
import classes from './BurgerIngredient.module.css'

function burgerIngredient(props) {
    let ingredient
    switch (props.type) {
        case('bread-bottom'):
            ingredient = <div className={classes.BreadBottom} />
            break
        case('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1} />
                    <div className={classes.Seeds2} />
                </div>
            )
            break
        case('meat'):
            ingredient = <div className={classes.Meat} />
            break
        case('meat2'):
            ingredient = <div className={classes.Meat} />
            break
        case('cheese'):
            ingredient = <div className={classes.Cheese} />
            break
        case('cheese2'):
            ingredient = <div className={classes.Cheese} />
            break
        case('salad'):
            ingredient = <div className={classes.Salad} />
            break
        case('bacon'):
            ingredient = <div className={classes.Bacon} />
            break
        default:
            ingredient = null
    }
    return ingredient
}

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default burgerIngredient;

