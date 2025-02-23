import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
    configureOrderFormInput = (elementType, elementConfigType, elementConfigPlaceholder) => {
        return (
            {
                elementType: elementType,
                elementConfig: {
                    type: elementConfigType,
                    placeholder: elementConfigPlaceholder
                },
                value: '',
                validation: {
                    required:true
                },
                valid: false,
                touched: false
            }
        )
    }

    state = {
        orderForm: {
            name: this.configureOrderFormInput('input', 'text', 'Name'),
            street: this.configureOrderFormInput('input', 'text', 'Street'),
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required:true,
                    minLength: 6,
                    maxLength:6
                },
                valid: false,
                touched: false
            },
            country: this.configureOrderFormInput('input', 'text', 'Country'),
            email: this.configureOrderFormInput('input', 'email', 'Email Address'),
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'},
                        {value: 'standard', displayValue: 'Standard'}
                    ]
                },
                valid: true,
                validation: {},
                value: 'fastest'
            }
        },
        formIsValid: false,
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({loading: true, checkoutSummary: true})

        const formData = {}

        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }
        const order = {
            ingredients: this.props.ingredients,
            //always calculate price on server and not from the client side
            price: this.props.price,
            orderData: formData
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false})
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({loading: false})
            })
        console.log('ContactData.js orderHandler', this.props.ingredients)
    }

    checkValidity(value, rules) {
        let isValid = true
        if(!rules) {
            return true
        }
        if(rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }
        return isValid
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {...this.state.orderForm}
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true
        updatedOrderForm[inputIdentifier] = updatedFormElement

        let formIsValid = true
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
        }
        console.log('ContactData.js inputChangedHandler', 'formIsValid: ' + formIsValid)
        this.setState({orderForm: updatedOrderForm, formIsValid:formIsValid})
    }

    render() {
        const formElements = []
        for (let key in this.state.orderForm) {
            formElements.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElements.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        valueType={formElement.config.elementConfig.placeholder}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                    )
                )}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>)
        if(this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData
