var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}
//Retrieve the data
function readFormData(){
    var formData = {};
    formData["ToDo"] = document.getElementById("ToDo").value;
    formData["date"] = document.getElementById("date").value;
    return formData;
}
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.ToDo;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.date;
    var cell6 = newRow.insertCell(2);
        cell6.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`

}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('ToDo').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Date').value = selectedRow.cells[1].innerHTML;
    }

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.ToDo;
    selectedRow.cells[1].innerHTML = formData.Date;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('ToDo').value = '';
    document.getElementById('Date').value = '';
  }