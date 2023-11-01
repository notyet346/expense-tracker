function newRow(){
    let tbody = document.getElementById("t-body");
    let tr = document.createElement("tr");

    //new row to table body
    tbody.appendChild(tr);

    //four cells
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    //cells to row
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    //retrieve form details
    let tdate = document.getElementById("date").value;
    let description = document.getElementById("description").value;
    let type = document.getElementById("type").value;
    let amount = document.getElementById("amount").value;

    //input values to cells
    td1.innerHTML = tdate;
    td2.innerHTML = description;
    td3.innerHTML = type;
    td4.innerHTML = "R " + amount;

    event.preventDefault();
}