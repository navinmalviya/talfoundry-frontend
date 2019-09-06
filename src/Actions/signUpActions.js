import axios from 'axios';
import BASE_URL from '../constants/common'
export const userLoginAction = payload => dispatch => {
  dispatch({
    type: "USER_LOGIN_ACTION",
    payload: payload
  });
};

export function signupIsLoading(bool) {
  return {
    type: 'SIGNUP_IS_LOADING',
    isLoading: bool
  };
}
export function signupHasErrored(bool) {
  return {
    type: 'SIGNUP_HAS_ERRORED',
    hasErrored: bool
  };
}
// export function signUpAction(data) {
//   debugger
//   var url = BASE_URL + '/signup';
//   // return dispatch => {
//   //   dispatch(signupIsLoading(true));
//     return axios({
//       method: "post",
//       url: url,
//       data: data
//     })
//     .then(response => {
//       debugger
//       // dispatch(signupIsLoading(false))
//     })
//     .catch(error => {
//       debugger
//       // dispatch(signupIsLoading(false));
//       // dispatch(signupHasErrored(true))
//     });
//   }
// }


export function signUpAction(data){
    debugger
    // return (dispatch) => {
      return axios.post(BASE_URL + '/signup', data)
      .then(
        response => {
          // dispatch(signupIsLoading(false))
          return response
          console.log(response)
        }
      )
      .catch(
        error => console.log(error)
      )
    // }
}
  

