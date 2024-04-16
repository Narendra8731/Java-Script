let employees=[{id:101,name:"Narendra",sal:50000},
                {id:102,name:"Vishnu",sal:55000}]

 let createEmployee =(emp,callback)=>{
                  setTimeout(()=>{
               employees.push(emp)
                   callback()
              },2000)
       }
let displayEmployees =()=>{
           setTimeout(()=>{
        let rows=""
                  employees.forEach((emp)=>{
                  rows = rows + `<tr>
                       <td>${emp.id}</td>
                       <td>${emp.name}</td>
                       <td>${emp.sal}</td>
            </tr>`
        })
        document.getElementById('emp_Data').innerHTML = rows
       },3000)
    }

 createEmployee({'id':103,name:"subbu",sal:60000},displayEmployees)
                