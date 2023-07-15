function table() {
    // alert("run")
    
    let tableNumber=Number(document.getElementById("tableNumber").value);
    let Range=Number(document.getElementById("Range").value);
    // console.log(tableNumber,Range);
    let show=""
    for(let i=1;i<=Range;i++){
        // console.log(i);
        show +=`${tableNumber} x ${i} = ${tableNumber*i}<br>`
        document.getElementById("showData").innerHTML=show;

    }
    
}
function reload() {
    location.reload();
    
}