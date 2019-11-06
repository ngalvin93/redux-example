const initialState = {
  value: 0,
  color: 'black'
}

// Function to make a deep copy of the initial state
function deepCopy (x) {
  return JSON.parse(JSON.stringify(x))
}

const reducer = (currentState, action) => {
  const nextState = deepCopy(initialState)
  const { type } = action
  // Returns a deep copy if there is no state
  if (!currentState) {
    return nextState
  }

  switch (type) {
    case 'INCREMENT':
      nextState.value = currentState.value + 1
      break
    case 'DECREMENT':
      nextState.value = currentState.value - 1
      break
    case 'INCREMENT_BY_5':
      nextState.value = currentState.value + 5
      break
    case 'DECREMENT_BY_5':
      nextState.value = currentState.value - 5
      break
    case 'CHANGE_COLOR':
      nextState.color = changeColor.value
  }

  // Using if else also works...
  //   if (type === 'INCREMENT') {
  //     nextState.value = currentState.value + 1
  //   } else if (type === 'DECREMENT') {
  //     nextState.value = currentState.value - 1
  //   } else if (type === 'INCREMENT_BY_5') {
  //     nextState.value = currentState.value + 5
  //   } else if (type === 'DECREMENT_BY_5') {
  //     nextState.value = currentState.value - 5
  //   } else if (type === 'CHANGE_COLOR') {
  //     nextState.color = changeColor.value
  //   }

  return nextState
}
