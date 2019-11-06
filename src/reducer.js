const initialState = {
  value: 0,
  color: 'black'
}

// Function to make a deep copy of the initial state
function deepCopy (x) {
  return JSON.parse(JSON.stringify(x))
}

const reducer = (currentState, action) => {
  // Returns a deep copy if there is no state
  if (!currentState) {
    return deepCopy(initialState)
  }

  const { type } = action
  const nextState = deepCopy(initialState)

  if (type === 'INCREMENT') {
    nextState.value = currentState.value + 1
  } else if (type === 'DECREMENT') {
    nextState.value = currentState.value - 1
  } else if (type === 'INCREMENT_BY_5') {
    nextState.value = currentState.value + 5
  } else if (type === 'DECREMENT_BY_5') {
    nextState.value = currentState.value - 5
  } else if (type === 'CHANGE_COLOR') {
    nextState.color = changeColor.value
  }

  return nextState
}

//     // switch (action.type) {
//     //     // case "INCREMENT":
//     //     //     return {
//     //     //         value: state.value + 1,
//     //     //         color: state.color
//     //     //     }
//     //     // case "DECREMENT":
//     //     //     return {
//     //     //         value: state.value - 1,
//     //     //         color: state.color
//     //     //     }
//     //     // case "INCREMENT_BY_5":
//     //     //     return {
//     //     //         value: state.value + 5,
//     //     //         color: state.color
//     //     //     }
//     //     // case "DECREMENT_BY_5":
//     //     //     return {
//     //     //         value: state.value - 5,
//     //     //         color: state.color
//     //     //     }
//     //     case "RED":
//     //         console.log('IN RED')
//     //         state.color = 'red'
//     //         console.log(state)
//     //         break;

//     //         // return state
//     //         // return {
//     //         //     value: state.value,
//     //         //     color: 'red'
//     //         // }
//     //     case "GREEN":
//     //         console.log('IN GREEN')
//     //         state.color = 'green'
//     //         console.log(state)
//     //         break;

//     //         // return state
//     //         // return {
//     //         //     value: state.value,
//     //         //     color: 'green'
//     //         // }
//     //     case "BLUE":
//     //         console.log('IN BLUE')
//     //         state.color = 'blue'
//     //         console.log(state)
//     //         // return state
//     //         // return {
//     //         //     value: state.value,
//     //         //     color: 'blue'
//     //         // }
//     //         break;

//     //     default:
//     //         break;
//     //         // return state

//     // }
//     // return state
//     let { type } = action; // not sure what this is doing...
//     if (type === "INCREMENT") {
//         return {
//             value: state.value + 1
//         }
//     } else if (type === "DECREMENT") {
//         return {
//             value: state.value - 1
//         }
//     } else if (type === "INCREMENT_BY_5") {
//         return {
//             value: state.value + 5
//         }
//     } else if (type === "DECREMENT_BY_5") {
//         return {
//             value: state.value - 5
//         }
//     } else if (type === "DECREMENT_BY_5") {
//         return {
//             value: state.value - 5
//         }
//     } else if (color === "RED") {
//         return {
//             value: state.value,
//             color: "red"
//         }
//     } else if (color === "GREEN") {
//         return {
//             value: state.value,
//             color: "green"
//         }
//     } else if (color === "BLUE") {
//         return {
//             value: state.value,
//             color: "blue"
//         }
//     }
//     return state
// }
