//login-button functionality
document.getElementById('loginButton').addEventListener('click', function(e){
    e.preventDefault();
    const mobaileNumber = 123456789;
    const pinNumber = 1234;
    const mobaileNumbervalue = document.getElementById('mobaile-number').value
    const mobaileNumbervalueconverted = parseInt(mobaileNumbervalue);
    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberValuecoverted = parseInt(pinNumberValue);
    if (mobaileNumbervalueconverted === mobaileNumber && pinNumberValuecoverted === pinNumber) {
        window.location.href="./home.html"
    }
    else {
     alert('invalid credentials!')
    }
})

