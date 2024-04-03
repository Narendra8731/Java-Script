class account{
    acc_Id;
    acc_Name;
    acc_Bal;
    open_Account(){
        console.log("Account Opened successfully")
    }
    deposit_Amount(){
        console.log("Amount Deposited Successfully")
    }
    withdraw_Amount(){
        console.log("Insuffient Bal")
    }
    get_Bal(){
        console.log("server Busy")
    }
Close_Amount(){
    console.log("Bal is: Negative..Add more funds to close")
}
}
let a1=new account();
a1.open_Account();
a1.deposit_Amount();
a1.withdraw_Amount();
a1.get_Bal();
a1.Close_Amount();