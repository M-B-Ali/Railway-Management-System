let id = 1;

const startFormTemplate = document.querySelector(".input-state-data").innerHTML;

var addNewInputStateForm = () => {
  var formTemplate = document.querySelector(".input-form");
  var inputTemplate = startFormTemplate;
  var newDiv = document.createElement("div");
  newDiv.className = "input-state-data";
  newDiv.id = "input-state-data-" + id;

  inputTemplate = inputTemplate.replace(
    "input-state-data-bin-0",
    "input-state-data-bin-" + id
  );
  newDiv.innerHTML = inputTemplate;
  formTemplate.appendChild(newDiv);

  id++;
};
var deleteInputStateForm = (id) => {
  console.log(id);
  var abc = document.getElementById(id);
  console.log(abc);
  console.log(abc.parentNode);
  abc.parentElement.remove();
};
