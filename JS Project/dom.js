var products = [{
    no:1,
    name:"Shoes",
    color:"Black",
    category:"Shoes-Category",
    Quantity:1
},{
    no:1,
    name:"Phone",
    color:"Black",
    category:"Phone-Category",
    Quantity:2
},{
    no:1,
    name:"hoes",
    color:"Black",
    category:"Phone-Category",
    Quantity:3
}
];
function display(array){
    var rows = "";
    for(var i = 0;i<array.length;i++){
        rows += `<tr>
                 <td>${i+1}</td>
                 <td>${array[i].name}</td>
                 <td>${array[i].color}</td>
                 <td>${array[i].category}</td>
                 <td>${array[i].Quantity}</td>
                 </tr>`
    };
    var tbody = document.getElementById("t-body");
    tbody.innerHTML = rows;
}
display(products);
function search(){
    var searchName = document.getElementById("search");
    var searchValue = searchName.value;
    var newArray = [];
    for(var i=0;i<products.length;i++){
        if(products[i].name.toUpperCase().includes(searchValue.toUpperCase())===true){
            newArray.push(products[i]);
        }
    }
    console.log(newArray);
}