document.getElementById('btn-log-in').addEventListener('click',function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('login-phone-number').value;

    const pinNumber = document.getElementById('login-pin-number').value;

    if(phoneNumber === '01312203474' && pinNumber === '1234'){
        window.location.href = 'home.html';
    }
    else{
        alert('wrong phone number or pin !!')
    }

})