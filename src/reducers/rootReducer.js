import { combineReducers } from "redux";
import {signupHasErrored, signupIsLoading} from "../reducers/signUpReducer";
import signUpStepsReducer from '../reducers/signUpStepsReducer';

export default combineReducers({
  signupHasErrored,
  signupIsLoading,
  signUpSteps: signUpStepsReducer,
});
  