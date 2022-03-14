// console.log("Testing");

document.addEventListener("DOMContentLoaded", function () {
  fetch("/agent/station/all/JSON")
    .then((res) => res.json())
    // .then((data) => console.log(data));
    .then((data) => {
      console.log(data["data"]);
      loadStateTable(data["data"]);
    });
  //   loadStationTable([]);
  console.log("testing");
});

function loadStateTable(data) {
  const table = document.querySelector("table tbody");

  //   console.log(typeof data);

  let tableHtml = "";
  if (data.length === 0) {
    table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    console.log("No Data");
  }

  data.forEach(function ({
    station_id,
    station_name,
    station_code,
    state_name,
    zone_name,
    zone_code,
  }) {
    station_name = capatalise(station_name);
    tableHtml += "<tr>";
    tableHtml += `<td data-id=${station_id}>${station_name}</td>`;
    tableHtml += `<td data-id=${station_id}>${station_code}</td>`;
    tableHtml += `<td data-id=${station_id}>${state_name}</td>`;
    tableHtml += `<td data-id=${station_id}>${zone_name} / ${zone_code}</td>`;
    tableHtml += `<td><button class="delete-row-btn" data-id=${station_id}>Delete</button></td>`;
    tableHtml += `<td><button class="edit-row-btn" data-id=${station_id}>Edit</button></td>`;
    tableHtml += "</td>";
  });

  table.innerHTML = tableHtml;
}
