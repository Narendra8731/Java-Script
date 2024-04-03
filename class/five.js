class Account{
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
    get_Bal(){
        return this.acc_Bal;
    }
    withdrawl_Amount(amount){
        this.acc_Bal = this.acc_Bal -amount
    }
}
 let a1=new Account()
 a1.deposit_Amount(1000)
 a1.deposit_Amount(200)
 console.log(a1)
 a1.withdrawl_Amount(200)
 console.log(a1)

 let a2=new Account()
a1.deposit_Amount(800)
 a1.deposit_Amount(300)
 console.log(a2)
 a1.withdrawl_Amount(100)
 console.log(a2)

console.log("****printing Bal's")

console.log(a1.get_Bal())
console.log(a2.get_Bal())