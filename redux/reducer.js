import { CREATE_POST} from "./action"


function todosReducer(state = [], action) {
    switch (action.type) {
      case 'CREATE_POST': {
        return state.concat(action.payload)
      }
      default:
        return state
    }
  }