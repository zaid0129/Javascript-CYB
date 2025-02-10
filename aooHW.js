let student=[ {
    name:"saif",
    age:21,
    city:"Bina"
},{
    name:"aaliya",
    age:20,
    city:"Bhopal"
}, {
    name:"saad",
    age:22,
    city:"agra"
}, {
    name:"Ayush",
    age:24,
    city:"Punjab"
}
]

console.log(student)



let display = document.querySelector(".tab")

       
student.map( (e)=> {

    display.innerHTML+= ` <table> 
    <tr>
    <th> Name </th>
    <th> Age </th>
    <th> City </th>
    </tr>
    <tr>
    <td>  ${e.name}</td>
    <td>  ${e.age}</td>
    <td>  ${e.city}</td>
    </tr> </table>
    
    `
}
)


