let employees=[{'id':101,name:"Naari",sal:50000},
            {'id':102,name:"nani",sal:45000},
            {'id':103,name:"ramu",sal:40000}]
let createEmployees=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let flag=true;
            flag?resolve("Data inserted"):reject("failed")
            employees.push(emp)
        },3000 )
    })
}

let displayEmployee=()=>{
    setTimeout(() => {
       let rows=""
       for(employee of employees){
        rows = rows +`<tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.sal}</td>
                        </tr>`
       } 
       document.getElementById('emp_Data').innerHTML = rows
    }, 4000)
}

let exec=async ()=>{
    await createEmployees({'id':104,name:"vishnu",sal:65000})
     displayEmployee()   
}
exec()