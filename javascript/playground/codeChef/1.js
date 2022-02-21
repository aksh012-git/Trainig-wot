function myf(Withdrawal_amt,current_bal) {
    if (Withdrawal_amt % 5 == 0 && Withdrawal_amt + 0.50 <= current_bal) {
        console.log((current_bal - (Withdrawal_amt + 0.50)).toFixed(2));
    }
    else{
        console.log(current_bal.toFixed(2));
    }
}

myf(30,120.00);
myf(42,120.00);
myf(300,120.00);
myf(120.00,120.00);

