//add money feature
const ValidPIN = 1234
// function to get input values
function getInuputValueNumber(id) {
    const inputField = document.getElementById(id)
    const InuputFieldValue = inputField.value
    const InuputFieldValueNumber = parseInt(InuputFieldValue)
    return InuputFieldValueNumber;
}
// function to get inner text
function getInnerText(id) {
    const element = document.getElementById(id)
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}
// function to toggle 
function handleToggle(id) {
   const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block' 
}
// 

document.getElementById("add-money-btn").addEventListener('click', function (e) {
    e.preventDefault()
     const bank = document.getElementById("bank").value 
    const accountNumber = document.getElementById('account-number').value
    const amount = getInuputValueNumber('add-amount')
    const pin = getInuputValueNumber('add-pin')
    const availableBalance = getInnerText("available-balance");
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
    const availableBalance = getInnerText('available-balance');
    const pin2 = parseInt(document.getElementById('add-pin').value);

 const totalNewBalance = availableBalance - amount;
    document.getElementById('available-balance').innerText = totalNewBalance;

})
//function to taggle buttons

//togling feature
function handleButtonTaggle(id) {
     const formBtns = document.getElementsByClassName('form-btn');
   for (const btn of formBtns) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-gray-300")

    }
    //p
     document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
     
}


document.getElementById("add-btn").addEventListener('click', function () {
    handleToggle('add-money-prnt')
   
    //support
    handleButtonTaggle('add-btn')
    })
document.getElementById("cash-btn").addEventListener('click', function () {
    
    handleToggle('cash-out-prnt')
     handleButtonTaggle('cash-btn')
})
document.getElementById('transfer-btn').addEventListener('click', function () {
    handleToggle('transfer-money-prnt')
    handleButtonTaggle('transfer-btn') 
    
})
document.getElementById('bonus-btn').addEventListener('click', function () {
    handleToggle('get-bonus-prnt')
     handleButtonTaggle('bonus-btn')
    
})
