//add five rows if running for first time
let firstTime = true;
if (firstTime) {
  addFiveRows();
} else {
  update();
}

//to add five rows
function addFiveRows() {
  itemJsonArray = [];
  fiveRows = [
    ["Shree", "Chatane", "Pune", "India"],
    ["Dani", "Shwarts", "West-Coast", "Carolina"],
    ["Lana", "Adams", "Boston", "US"],
    ["Amanda", "Francico", "Paris", "France"],
    ["Lalu", "Prasad", "Nagpur", "India"],
  ];
  for (let i = 0; i < fiveRows.length; i++) {
    itemJsonArray[i] = fiveRows[i];
  }
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
}

//add the element to bottom
function addAtEnd() {
  console.log("Updating List...");
  fName = document.getElementById("fName").value;
  lName = document.getElementById("lName").value;
  city = document.getElementById("city").value;
  country = document.getElementById("country").value;
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    itemJsonArray.push([fName, lName, city, country]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([fName, lName, city, country]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }
  update();
}

//adds the element to the top
function addToTop() {
  console.log("Updating List...");
  fName = document.getElementById("fName").value;
  lName = document.getElementById("lName").value;
  city = document.getElementById("city").value;
  country = document.getElementById("country").value;
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    itemJsonArray.unshift([fName, lName, city, country]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.unshift([fName, lName, city, country]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }
  update();
}

//display function for displaying the list
function update() {
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }

  // Populate the table
  let tableBody = document.getElementById("tableBody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += `
                    <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td> 
                    <td>${element[2]}</td> 
                    <td>${element[3]}</td> 
                    </tr>`;
  });
  tableBody.innerHTML = str;
}

//onclicking append
append = document.getElementById("append");
append.addEventListener("click", addAtEnd);

//onclicking unshift
unshift = document.getElementById("unshift");
unshift.addEventListener("click", addToTop);

//displaying the list of items
update();

//clearing localstorage
function clearStorage() {
  if (confirm("Do you areally want to clear?")) {
    console.log("Clearing the storage");
    localStorage.clear();
    update();
  }
  alert("Refresh the page to get five rows");
}
