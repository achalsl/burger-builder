import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-burger-builder-4a642-default-rtdb.firebaseio.com/'
})

export default instance
