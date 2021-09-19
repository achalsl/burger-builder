import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal'
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        // constructor(props) {
        //     super(props);
        //     console.log('withErrorHandler.js constructor')
        //     this.reqInterceptor = axios.interceptors.request.use(request => {
        //         this.state = {error: null}
        //         return request
        //     })
        //     this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        //         this.state = {error: error}
        //         throw error
        //     })
        // }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: null})
                return request
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            })
        }

        componentWillUnmount() {
            console.log('withErrorHandler.js willUnmount', this.reqInterceptor, this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render () {
            return (
                <>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>

                    <WrappedComponent {...this.props} />
                </>
            )
        }
    }
}

export default withErrorHandler;

