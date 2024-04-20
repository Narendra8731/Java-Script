
class Account{
        acc_Name;
        acc_Email;
         constructor(name,email){
        this.acc_Name=name;
        this.acc_Email=email
    }
}
class SA extends Account{
    acc_Id;
    acc_Bal=0
    min_Bal=500
    constructor(id,name,email,account){
        super(name,email)
         this.acc_Id=id
         this.acc_Bal=500
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}

let c1=new SA(101,"Narendra",'naari@988gmail.com',50000)
console.log(c1)

console.log(c1.get_Bal())
