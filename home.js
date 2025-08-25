//add money feature
const ValidPIN = 1234
// function to get input values
function getInuputValueNumber(id) {
    const inputField = document.getElementById(id)
    const InuputFieldValue = inputField.value
    const InuputFieldValueNumber = parseInt(InuputFieldValue)
    return InuputFieldValueNumber;
}
document.getElementById("add-money-btn").addEventListener('click', function (e) {
    e.preventDefault()
     const bank = document.getElementById("bank").value 
    const accountNumber = document.getElementById('account-number').value
    const amount = getInuputValueNumber('add-amount')
    const pin = getInuputValueNumber('add-pin')
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    if (accountNumber.length < 11) {
        alert("Please Provide Valid Account Number")
        return;
    }
    if (pin !== ValidPIN) {
        alert("please Provide A Valid Pin")
        return;
    }
    //confusion 
   // console.log(availableBalance);
   const totalNewBalance = amount + availableBalance;
    document.getElementById('available-balance').innerText = totalNewBalance;
   

})

//cash out money feature
document.getElementById("withdraw-btn").addEventListener('click', function (e) {
    e.preventDefault()
    const amount = getInuputValueNumber('withdraw-amount')
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    const pin2 = parseInt(document.getElementById('add-pin').value);

 const totalNewBalance = availableBalance - amount;
    document.getElementById('available-balance').innerText = totalNewBalance;

})
//togling feature



document.getElementById("add-btn").addEventListener('click', function () {
    document.getElementById("cash-out-prnt").style.display = 'none'
    document.getElementById('add-money-prnt').style.display = 'block'
    })
document.getElementById("cash-btn").addEventListener('click', function () {
    document.getElementById("add-money-prnt").style.display = 'none'
    document.getElementById('cash-out-prnt').style.display = 'block'

})
