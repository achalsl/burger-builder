import React, {Component}  from 'react';
import Button from '@material-ui/core/Button';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


class App extends Component {
    render() {
        return (
            <>
                <Layout />
                <Button variant="contained" color="secondary">
                    Hello World
                </Button>
                <BurgerBuilder />
            </>
        );
    }
}

export default App;
