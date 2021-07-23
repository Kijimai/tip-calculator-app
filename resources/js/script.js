// Buttons pointers
const fivePerc = document.getElementById('5percent') 
const tenPerc = document.getElementById('10percent') 
const fifteenPerc = document.getElementById('15percent') 
const twentyFivePerc = document.getElementById('25percent') 
const fiftyPerc = document.getElementById('50percent') 
const customPerc = document.getElementById('custom') 
const btns = document.querySelectorAll('.btn')
const resetBtn = document.getElementById('reset')



// store tip % type
let selectedTip = ''












btns.forEach(btn => {
  btn.addEventListener('click', addSelectedClass)
})

function addSelectedClass() {
  btns.forEach(btn => btn.classList.remove('selected'))
  this.classList.add('selected')
  selectedTip = this.id
  console.log(selectedTip)
}