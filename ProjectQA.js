function showRecords(MultiFunction) {

    Reftable.innerHTML = "";
    border="1";
    let Trow = document.createElement("tr");
    let TD_NationalInsurance = document.createElement("td");
    let TD_FullName = document.createElement("td");
    let TD_PhoneNumber = document.createElement("td");
    let TD_Address = document.createElement("td");
    let TD_Department = document.createElement("td");
    let TD_Operations = document.createElement("td");

    TD_NationalInsurance.innerHTML = "<b> N.I Number </b>";
    TD_FullName.innerHTML = "<b> Full Name </b>";
    TD_PhoneNumber.innerHTML = "<b> PhoneNumber </b>";
    TD_Address.innerHTML = "<b> Address </b>";
    TD_Department.innerHTML = "<b> Department </b>";
    TD_Operations.innerHTML = "<b> Operations </b>";


    Trow.appendChild(TD_NationalInsurance);
    Trow.appendChild(TD_FullName);
    Trow.appendChild(TD_PhoneNumber);
    Trow.appendChild(TD_Address);
    Trow.appendChild(TD_Department);
    Trow.appendChild(TD_Operations);

    Reftable.appendChild(Trow);


    for (let i = 0; i < QArecords.length; i++) {
        if (QArecords[i].Department == document.getElementById("FilterDepartment").value || MultiFunction) {

        let Trow = document.createElement("tr");
        Trow.style.backgroundColor = "lightgrey";
        Trow.style.textAlign = "center";
        Trow.style.tableLayout = "fixed";
        //Trow.style.wordSpacing = "10px"
        let TD_NationalInsurance = document.createElement("td");
        let TD_FullName = document.createElement("td");
        let TD_PhoneNumber = document.createElement("td");
        let TD_Address = document.createElement("td");
        let TD_Department = document.createElement("td");
        let TD_Operations = document.createElement("td");

        TD_NationalInsurance.innerHTML = QArecords[i].NationalInsurance;
        TD_FullName.innerHTML = QArecords[i].FullName;
        TD_PhoneNumber.innerHTML = QArecords[i].PhoneNumber;
        TD_Address.innerHTML = QArecords[i].Address;
        TD_Department.innerHTML = QArecords[i].Department;
        //TD_Operations.innerHTML = '<input type="button" value ="Delete" onclick="DeleteRow()"id="deleteRow">' + '<input type="button" value = "Edit" onClick="EditRow()"id=EditRow">'

        let Btn_delete = document.createElement("input");
        Btn_delete.type = "button";
        Btn_delete.value = "delete";
        Btn_delete.onclick = function () {
            let choice = confirm("Confirm Delete?");
            if (choice == true) {
                QArecords.splice(i, 1);
                showRecords();
            }
        };

        let Btn_update = document.createElement("input");
        Btn_update.type = "button";
        Btn_update.value = "update";
        Btn_update.onclick = function () {

            if (Btn_update.value == "update") {
                Btn_update.value = "Save";
                updateRecord(Trow, i);
            } else {
                let ch = confirm("Confirm Update?");
                if (ch == true) {
                    QArecords[i].NationalInsurance = document.getElementById("NatIns").value;
                    QArecords[i].FullName = document.getElementById("FName").value;
                    QArecords[i].PhoneNumber = document.getElementById("PhoneNum").value;
                    QArecords[i].Address = document.getElementById("Addy").value;
                    QArecords[i].Department = document.getElementById("Dept").value;
                }
                showRecords();
                Btn_update.value = "Update";
            }
        };
        TD_Operations.appendChild(Btn_delete);
        TD_Operations.appendChild(Btn_update);

        Trow.appendChild(TD_NationalInsurance);
        Trow.appendChild(TD_FullName);
        Trow.appendChild(TD_PhoneNumber);
        Trow.appendChild(TD_Address);
        Trow.appendChild(TD_Department);
        Trow.appendChild(TD_Operations);

        Reftable.appendChild(Trow);

    }
    document.body.appendChild(Reftable)
    }
}
function updateRecord(ref, index) {

    ref.cells[0].innerHTML = "<input id='NatIns' type='text' value='" + QArecords[index].NationalInsurance+ "'>";
    ref.cells[1].innerHTML = "<input id='FName' type='text' value='" + QArecords[index].FullName+ "'>";
    ref.cells[2].innerHTML = "<input id='PhoneNum' type='text' value='" + QArecords[index].PhoneNumber+ "'>";
    ref.cells[3].innerHTML = "<input id='Addy' type='text' value='" + QArecords[index].Address+ "'>";
    ref.cells[4].innerHTML = "<select id='<select id='FilterDepartment'>"+
    "<option value='HR' >HR department</option>"+
    "<option value='IT' >IT department</option>"+
    "<option value='Sales' >Sales department</option>"+
    "</select>";
}
function addRecord() {
    let formFilled = validateForm();
    if (formFilled == true) {
        QArecords.push(
            {
                "NationalInsurance": document.getElementById("NationalInsurance").value,
                "FullName": document.getElementById("FullName").value,
                "PhoneNumber": document.getElementById("PhoneNumber").value,
                "Address": document.getElementById("Address").value,
                "Department": document.getElementById("department").value,
            }
        );
    }
}
function validateForm() {
    let validation = true;
    for (let i = 0; i < document.forms[0].elements.length; i++) {
        if (document.forms[0].elements[i].value == "") {
            document.getElementById("error" + i).style.visibility = "visible";
            validation = false;
        }
    }
    return validation;
}
/*function addRecordToDom(NationalInsurance, FullName, PhoneNumber, Address, Department) {

    let spanRecord = document.createElement("div");
    let spanNationalInsurance = document.createElement("span");
    let spanFullName = document.createElement("span");
    let spanPhoneNumber = document.createElement("span");
    let spanAddress = document.createElement("span");
    let spanDepartment = document.createElement("span");

    spanNationalInsurance.innerHTML = NationalInsurance;
    spanFullName.innerHTML = FullName;
    spanPhoneNumber.innerHTML = PhoneNumber;
    spanAddress.innerHTML = Address;
    spanDepartment.innerHTML = Department;

    spanRecord.appendChild(spanNationalInsurance);
    spanRecord.appendChild(spanFullName);
    spanRecord.appendChild(spanPhoneNumber);
    spanRecord.appendChild(spanAddress);
    spanRecord.appendChild(spanDepartment);


    document.body.appendChild(spanRecord);
}

function FilterRecords() {
    
    Reftable.innerHTML = "";
    let Trow = document.createElement("tr");
    let TD_NationalInsurance = document.createElement("td");
    let TD_FullName = document.createElement("td");
    let TD_PhoneNumber = document.createElement("td");
    let TD_Address = document.createElement("td");
    let TD_Department = document.createElement("td");

    TD_NationalInsurance.innerHTML = "<b> N.I Number </b>";
    TD_FullName.innerHTML = "<b> Full Name </b>";
    TD_PhoneNumber.innerHTML = "<b> PhoneNumber </b>";
    TD_Address.innerHTML = "<b> Address </b>";
    TD_Department.innerHTML = "<b> Department </b>";

    Trow.appendChild(TD_NationalInsurance);
    Trow.appendChild(TD_FullName);
    Trow.appendChild(TD_PhoneNumber);
    Trow.appendChild(TD_Address);
    Trow.appendChild(TD_Department);

    Reftable.appendChild(Trow);

    for (let i = 0; i < QArecords.length; i++) {

        if (QArecords[i].Department == document.getElementById("FilterDepartment").value) {

            let Trow = document.createElement("tr");
            Trow.style.backgroundColor = "lightgreen";
            Trow.style.textAlign = "center";
            Trow.style.tableLayout = "fixed";
            let TD_NationalInsurance = document.createElement("td");
            let TD_FullName = document.createElement("td");
            let TD_PhoneNumber = document.createElement("td");
            let TD_Address = document.createElement("td");
            let TD_Department = document.createElement("td");

            TD_NationalInsurance.innerHTML = QArecords[i].NationalInsurance;
            TD_FullName.innerHTML = QArecords[i].FullName;
            TD_PhoneNumber.innerHTML = QArecords[i].PhoneNumber;
            TD_Address.innerHTML = QArecords[i].Address;
            TD_Department.innerHTML = QArecords[i].Department;

            Trow.appendChild(TD_NationalInsurance);
            Trow.appendChild(TD_FullName);
            Trow.appendChild(TD_PhoneNumber);
            Trow.appendChild(TD_Address);
            Trow.appendChild(TD_Department);
            

            Reftable.appendChild(Trow);

        }

        document.body.appendChild(Reftable)
    }
}
*/