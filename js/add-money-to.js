document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('add-money-input');

    const pinNumber = getInputFieldValueById('input-pin-number');

    if(isNaN(addMoney)){
        alert('failed to add money');
        return;
    }

    if(pinNumber === 1234){
        const CurrentAmount = getTextFieldValueById('current-amount');

        const newBalance = CurrentAmount + addMoney;

        document.getElementById('current-amount').innerText = newBalance;

        // add to transaction history

        const p = document.createElement('p');
        p.innerText =  `Added : ${addMoney} Tk.Balance : ${newBalance}`

        // como function

        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('Failed to add Money')
    }
})