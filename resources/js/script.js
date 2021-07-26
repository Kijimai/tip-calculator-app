// pointers
const fivePerc = document.getElementById('5percent') 
const tenPerc = document.getElementById('10percent') 
const fifteenPerc = document.getElementById('15percent') 
const twentyFivePerc = document.getElementById('25percent') 
const fiftyPerc = document.getElementById('50percent') 
const customPerc = document.getElementById('custom') 
const btns = document.querySelectorAll('.btn')
const resetBtn = document.getElementById('reset')
const bill = document.getElementById('total-bill')
const peopleCount = document.getElementById('count')

const errorBill = document.getElementById('errorBill')
const errorPeople = document.getElementById('errorPeople')

const tipPerPersonDisplay = document.getElementById('tip-per-person')
const tipTotalDisplay = document.getElementById('tip-total')

// store tip % type and show tip totals
let selectedTip = 0.00;
let billAmount = 0.00
let totalPerPerson
let tipPerPerson
let numOfPeople = 1

resetBtn.addEventListener('click', resetAll)

bill.addEventListener('input', (e) => {
  billAmount = parseFloat(e.target.value)
  let inputContainer = e.target.parentNode.parentNode
  if(billAmount < 1) {
    errorBill.textContent = 'Cannot be zero'
    errorBill.classList.add('active')
    if(billAmount < 0) {
      inputContainer.classList.remove('valid')
      inputContainer.classList.add('invalid')
      errorBill.textContent = 'Cannot be negative'
      errorBill.classList.add('active')
    }
    inputContainer.classList.remove('valid')
    inputContainer.classList.add('invalid')
  } else {
    errorBill.classList.remove('active')
    inputContainer.classList.remove('invalid')
    inputContainer.classList.add('valid')
  }
})

customPerc.addEventListener('click', (e) => {
  //recalculates with current value on click
  selectedTip = (e.target.value/100)
  recalculateBill(billAmount, selectedTip, numOfPeople)
  btns.forEach(btn => btn.classList.remove('selected'))
  customPerc.addEventListener('input', (e) => {
    selectedTip = (e.target.value/100)
    console.log(selectedTip)
    recalculateBill(billAmount, selectedTip, numOfPeople)
  })
})

btns.forEach(btn => {
  btn.addEventListener('click', addSelectedClass)
  recalculateBill(billAmount, selectedTip, numOfPeople)
})

peopleCount.addEventListener('input', (e) => {
  let inputContainer = e.target.parentNode.parentNode
  if(e.target.value < 1) {
    errorPeople.textContent = 'Cannot be zero'
    errorPeople.classList.add('active')
    if(e.target.value < 0) {
      inputContainer.classList.remove('valid')
      inputContainer.classList.add('invalid')
      errorPeople.textContent = 'No Negatives'
      errorPeople.classList.add('active')
    }
    inputContainer.classList.remove('valid')
    inputContainer.classList.add('invalid')
    errorPeople.classList.add('active')
  } else {
    errorPeople.classList.remove('active')
    inputContainer.classList.remove('invalid')
    inputContainer.classList.add('valid')
  }
  numOfPeople = parseInt(e.target.value)
  recalculateBill(billAmount, selectedTip, numOfPeople)
})

function addSelectedClass() {
  btns.forEach(btn => btn.classList.remove('selected'))
  this.classList.add('selected')
  let checkTip = this.id
  switch (checkTip) {
    case '5percent':
      selectedTip = 0.05 
      recalculateBill(billAmount, selectedTip, numOfPeople)
      break;
    case '10percent': 
      selectedTip = 0.1 
      recalculateBill(billAmount, selectedTip, numOfPeople)
      break;
    case '15percent': 
      selectedTip = 0.15 
      recalculateBill(billAmount, selectedTip, numOfPeople)
      break;
    case '25percent': 
      selectedTip = 0.25 
      recalculateBill(billAmount, selectedTip, numOfPeople)
      break;
    case '50percent': 
      selectedTip = 0.5 
      recalculateBill(billAmount, selectedTip, numOfPeople)
      break;
  }
}

function recalculateBill(bill, tipPercent, peopleCount) {
  let tipAmountPerPerson = (parseFloat(bill * tipPercent)/peopleCount).toFixed(2)
  let totalPayPerPerson = ((parseFloat(bill)  / peopleCount + parseFloat(tipAmountPerPerson))).toFixed(2)

  if(!(selectedTip <= 0)) {
    tipTotalDisplay.textContent = totalPayPerPerson
    tipPerPersonDisplay.textContent = tipAmountPerPerson
  } else {
    tipTotalDisplay.textContent = NaN
    tipPerPersonDisplay.textContent = NaN
  }
}

function resetAll() {
  bill.value = 0.00
  selectedTip = 0.00;
  billAmount = 0.00
  numOfPeople = 1
  recalculateBill(billAmount, selectedTip, numOfPeople)
  tipTotalDisplay.textContent = '0.00'
  tipPerPersonDisplay.textContent = '0.00'
  peopleCount.value = 1
}
