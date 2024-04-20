class Account{
    acc_Name;
    acc_Email;
    constructor(name,email){
    this.acc_Name=name
    this.acc_Email=email
   }
}

class  SA extends Account{
    acc_Id;
    acc_Bal=0
    min_Bal=500
    constructor(id,name,email,amount){
        super(name,email)
        this.acc_Id=id
        this.acc_Bal = amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}
    class CA extends Account{
    min_Bal=10000;
    acc_Id;
    acc_Bal;
    constructor(id,name,email,amount){
        super(name,email)
        this.acc_Id=id
        this.acc_Bal = amount
    }
    get_Bal(){
            return this.acc_Bal - this.min_Bal
    }
}

let c1=new SA(201,"Narendra",'narendra@gmail.com',55000)
let c2=new CA(202,"Naari",'naari44@gmail.com',45000)

console.log(c1)
console.log(c2)

console.log(c1.get_Bal())
console.log(c2.get_Bal())