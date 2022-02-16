let id = 1;
var addNewInputStateForm = () => {
  var formTemplate = document.querySelector(".input-form");
  var inputTemplate = document.querySelector(".input-state-data").innerHTML;
  var newDiv = document.createElement("div");
  newDiv.className = "input-state-data";
  newDiv.id = "input-state-data-" + id;
  newDiv.lastChild.id = "input-state-data-dustbin-" + id;
  newDiv.innerHTML = inputTemplate;
  formTemplate.appendChild(newDiv);

  id++;
};
var deleteInputStateForm = (id) => {
  console.log(id);
};
