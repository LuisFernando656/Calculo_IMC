import {Modal} from './modal.js'
import {AlertError} from './alert-error.js'
import {notANumber, calculateIMC} from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = e => {
  e.preventDefault()
  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if(weightOrHeightIsNotANumber){
    AlertError.open()
    return
  }
  
  const result = calculateIMC(weight,height)

  displayResult(result)
}

function displayResult (result) {
  const message = `Seu IMC é de ${result}`
  Modal.message.innerHTML = message
  Modal.open()
}

inputHeight.oninput = () =>  AlertError.close()
inputWeight.oninput = () =>  AlertError.close()