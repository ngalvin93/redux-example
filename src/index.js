const { createStore } = Redux

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer)

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment')
incrementButton.addEventListener('click', e => dispatch({ type: 'INCREMENT' }))

// Dispatch the "DECREMENT" action every time the -1 button is pressed
const decrementButton = document.getElementById('decrement')
decrementButton.addEventListener('click', e => dispatch({ type: 'DECREMENT' }))

const incrementBy5Button = document.getElementById('incrementBy5')
incrementBy5Button.addEventListener('click', e => dispatch({ type: 'INCREMENT_BY_5' }))

const decrementBy5Button = document.getElementById('decrementBy5')
decrementBy5Button.addEventListener('click', e => dispatch({ type: 'DECREMENT_BY_5' }))

// Dispatch the "CHANGE_COLOR" action when the color is changed in the dropdown
const changeColor = document.getElementById('color')
changeColor.addEventListener('change', e => dispatch({ type: 'CHANGE_COLOR', color: changeColor.value }))

// Dispatch the "SET_COUNTER" action when a number is submitted
const setBtn = document.getElementById('btn')
const text = document.getElementById('input')
setBtn.addEventListener('click', function (e) {
  e.preventDefault()
  dispatch({ type: 'SET_COUNTER', value: text.value })
  text.value = ''
})
