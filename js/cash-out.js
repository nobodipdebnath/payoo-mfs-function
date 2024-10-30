document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const inputMoney = getInputFieldValueById('input-cash-out');

    const pinNumber = getInputFieldValueById('input-cashout-pin');

    if(pinNumber === 1234){
        const currentAmount = getTextFieldValueById('current-amount');
        const cashOutAmount = currentAmount - inputMoney;

        document.getElementById('current-amount').innerText = cashOutAmount;

        // add history

        const div = document.createElement('div');
        div.innerHTML +=`
        <div class="p-4 border-black rounded-2xl mt-8">
        <h1 class="text-xl text-[#111111] font-bold">${inputMoney} Cash Out . New Balance ${cashOutAmount}</h1>
        <p class="text-[#111111B3] mt-2">${'Date : ' + Date()}</p>
      </div>
      `

        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Failed to Cash Out')
    }
})