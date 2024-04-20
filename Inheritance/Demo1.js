class parent{
    parent_Name;
    constructor(name){
       //console.log("parent class constructor")
        this.parent_Name=name
    }
}

class child extends parent{
    child_Name;
    constructor(name,p_Name){
        super(p_Name)
        this.child_Name=name
    }
}

let c1=new child("naari","Narendra")
console.log(c1)
let c2=new child("subbu","vishnu")
console.log(c2)