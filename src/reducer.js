// this file helps to push data to our data layer
// it will help manipulate data in the data layer - state provider

export const initialState = {
  basket: [],
  loggedinuser: null
}


const reducer = (state, action) => {
  console.log(action)
  switch(action.type){
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      }
      case 'SET_LOGIN':
        return {
          ...state,
          loggedinuser: action.user

        }
  }
}

export default reducer
