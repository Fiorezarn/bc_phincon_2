let table = document
  .getElementById("table-kelas")
  .getElementsByTagName("tbody")[0];
function addRowAdjust(data) {
  data.forEach((d) => {
    table.insertAdjacentHTML(
      "beforeend",
      `<tr>
        <td>${d.no}</td>
        <td>${d.className}</td>
        <td>${d.instructorName}</td>
        <td>${d.classCode}</td>
        <td>${d.studentQty}</td>
        </tr>`
    );
  });
}

let data = [
  {
    no: 4,
    className: "Data Science",
    instructorName: "Lita",
    classCode: "DS",
    studentQty: 5,
  },
  {
    no: 5,
    className: "Devops",
    instructorName: "Mutia",
    classCode: "DEVOPS",
    studentQty: 10,
  },
];

addRowAdjust(data);

// addRowAdjust(4, "Devops", "Mutoa", "DEVOPS", "10");
// addRowAdjust(5, "Data Science", "Lita", "DS", "5");

// const table2 = document.getElementById("table-kelas");
// var row = table2.insertRow(4);
// var row2 = table2.insertRow(5);

// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(1);
// var cell3 = row.insertCell(2);
// var cell4 = row.insertCell(3);
// var cell5 = row.insertCell(4);

// var cell6 = row2.insertCell(0);
// var cell7 = row2.insertCell(1);
// var cell8 = row2.insertCell(2);
// var cell9 = row2.insertCell(3);
// var cell10 = row2.insertCell(4);

// cell6.innerHTML = "5";
// cell7.innerHTML = "Devops";
// cell8.innerHTML = "Mutoa";
// cell9.innerHTML = "DEVOPS";
// cell10.innerHTML = "10";

// cell1.innerHTML = "4";
// cell2.innerHTML = "Data Science";
// cell3.innerHTML = "Lita";
// cell4.innerHTML = "DS";
// cell5.innerHTML = "5";
