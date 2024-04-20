class parent{
    parent_Name;
    constructor(name){
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

let c1=new child("Naari","Narendra")
let c2=new child("Nani","Motu")

console.log(c1)
console.log(c2)
