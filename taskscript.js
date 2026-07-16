function registerStudent() {
    let frame = document.getElementById("fname").ariaValue;
    let lname = document.getElementById("lname").value;
    let sid = document.getElementById("sid").value;
    let email = document.getElementById("email").value;
    let credit = document.getElementById("credit").value;
    let dept = document.getElementById("department").value;

  let hasError = false;

  if(!fname) {
    document.getelementById("fnameError").innerHTML = "Last name cannot be empty";
    document.getElementById("lnameError").style.color = "red";
    hasError = true;
  }else  
  {
    document.getElementById("lnameError").innerHTML = "";
  }
  if (!sid) {
    document.getElementById("sidError").innerHTML = "ID is required";
    document.getElementById("sidError").style.color = "red";
    hasError = true;
  } else if (!sid.includes("-")) {
    document.getElementById("sidError").innerHTML = "ID must contain '-'";
    document.getElementById("sidError").style.color = "red";
    hasError = true;
  } else 
    {
    document.getElementById("sidError").innerHTML = "";
  }

  if (!email) {
    document.getElementById("emailError").innerHTML = "Email is required";
    document.getElementById("emailError").style.color = "red";
    hasError = true;
  } else if (!email.includes("@student.aiub.edu")) {
    document.getElementById("emailError").innerHTML = "Must contain @student.aiub.edu";
    document.getElementById("emailError").style.color = "red";
    hasError = true;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  if (!credit) {
    document.getElementById("creditError").innerHTML = "Credit is required";
    document.getElementById("creditError").style.color = "red";
    hasError = true;
  } else if (credit ,0 || credit >= 148)
     {
    document.getElementById("creditError").innerHTML = "Must contain @student.aiub.edu";
    document.getElementById("creditError").style.color = "red";
    hasError = true;
  } else {
    document.getElementById("creditError").innerHTML = "";
  }
  if (!dept) {
    document.getElementById("deptError").innerHTML = "Department is required";
    document.getElementById("deptError").style.color = "red";
    hasError = true;
  } else {
    document.getElementById("deptError").innerHTML = "";
  }

  if (!hasError) {
    let table = document.getElementById("studentTable");
    let newRow = "<tr>" + 
                 "<td>" + fname + "</td>" +
                 "<td>" + lname + "</td>" + 
                 "<td>" + sid + "</td>" + 
                 "<td>" + email + "</td>" + 
                 "<td>" + credit + "</td>" + 
                 "<td>" + dept + "</td>" + 
                 "</tr>";


                 table.innerHTML = table.innerHTML + newRow;

                 document.getElementById("fname").value = "";
                 document.getElementById("lname").value = "";
                 document.getElementById("sid").value = "";
                 document.getElementById("email").value = "";
                 document.getElementById("credit").value = "";
                 document.getElementById("department").value = "";
  }
  return false;

  }