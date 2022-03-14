const template = document.querySelector(".form-input-row ").outerHTML;

function addNewInputFormRow() {
  let inputRowContainer = document.querySelector(".form-input-row-container");
  // console.log(inputRowContainer.childNodes);
  inputRowContainer.insertAdjacentHTML("beforeend", template);
  // inputRowContainer.appendChild(stringToHTML(template));
  // console.log(template);
}
function deleteInputFormRow(row) {
  let a = row.parentNode;
  // console.log(a);
  a.remove(a);
}

var stringToHTML = function (str) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  return doc.body;
};

function submitResult() {
  let isExecuted = confirm("Are you sure to submit this form?");
  // console.log(isExecuted);

  if (isExecuted) document.getElementById("train-timetable-form").submit();
}

// function confirmSubmit() {
//   var agree = confirm("Are you sure you wish to continue?");
//   if (agree) return true;
//   else return false;
// }

function calculateSrNo() {
  console.log("Form changed");
  let myForm = document.getElementById("train-timetable-form");
  // let formData = document.querySelectorAll(".form-input-row");
  // // train-timetable-form
  // let a = new FormData(myForm);
  // const value = Object.fromEntries(a.entries());
  // console.log({ value });
  
}
