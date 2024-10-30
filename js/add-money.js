
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    console.log('add money btn clicked');

    // getInputFieldValueById();

    // const addMoney = getInputFieldValueById();
    // console.log(addMoney);

    const addMoney = getInputFieldValueById('add-money-input');
    console.log(addMoney);

    const pinNumber = getInputFieldValueById('input-pin-number');
    console.log(pinNumber);

    
})