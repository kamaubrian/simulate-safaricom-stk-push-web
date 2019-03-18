import axios from 'axios'

export default ()=>{
    return axios.create({
        baseURL: 'https://node-stkpush-api.herokuapp.com/api/v1'
    })
}