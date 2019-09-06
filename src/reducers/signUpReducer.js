export function signupHasErrored(state = false, action) {
  switch (action.type) {
    case 'SIGNUP_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}
export function signupIsLoading(state = false, action) {
  switch (action.type) {
    case 'SIGNUP_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

  