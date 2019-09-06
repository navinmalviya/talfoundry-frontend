import axios from 'axios';
import BASE_URL from '../constants/common'

export function loginAction(data){
    debugger
    // return (dispatch) => {
      return axios.post(BASE_URL + '/login', data)
      .then(
        response => {
          // dispatch(signupIsLoading(false))
          console.log(response)
          return response
        }
      )
      .catch(
        error => console.log(error)
      )
    // }
}