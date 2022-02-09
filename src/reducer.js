// this file helps to push data to our data layer
// it will help manipulate data in the data layer - state provider

export const initialState = {
  basket: [],
}


const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      }
  }
}

export default reducer
