// Buttons pointers
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

const tipPerPersonDisplay = document.getElementById('tip-per-person')
const tipTotalDisplay = document.getElementById('tip-total')

// store tip % type and show tip totals
let selectedTip = ''
let billAmount = 0.00
let totalPerPerson
let tipPerPerson
let numOfPeople = 1

bill.addEventListener('input', () => {
  billAmount = bill.value
  console.log(billAmount)
})

customPerc.addEventListener('click', () => {
  btns.forEach(btn => btn.classList.remove('selected'))
  console.log(selectedTip)
})

customPerc.addEventListener('input', () => {
  selectedTip = customPerc.value
  console.log(selectedTip)
  recalculateBill()
})

btns.forEach(btn => {
  btn.addEventListener('click', addSelectedClass)
  recalculateBill()
})

peopleCount.addEventListener('input', (e) => {
  numOfPeople = e.target.value
  console.log(numOfPeople)
  recalculateBill()
})

function addSelectedClass() {
  btns.forEach(btn => btn.classList.remove('selected'))
  this.classList.add('selected')
  selectedTip = this.id
  switch (selectedTip) {
    case '5percent': 
      recalculateBill(0.05)
      break;
    case '10percent': 
      recalculateBill(0.1)
      break;
    case '15percent': 
      recalculateBill(0.15)
      break;
    case '25percent': 
      recalculateBill(0.25)
      break;
    case '50percent': 
      recalculateBill(0.50)
      break;
  }
}

function recalculateBill(tipPercent) {
  console.log(billAmount * tipPercent + " tip total")
  tipTotalDisplay.textContent = (billAmount * tipPercent).toFixed(2)
  tipPerPersonDisplay.textContent = ((billAmount * tipPercent)/numOfPeople).toFixed(2)
  console.log((billAmount * tipPercent)/numOfPeople + " per person")
}

function displayTips() {

}