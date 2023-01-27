// Create the table
let table = document.getElementById('students-table');

// Add table rows and cells
for (let i = 0; i < 10; i++) {
  let row = table.insertRow();
  let nameCell = row.insertCell();
  let ageCell = row.insertCell();
  let gradeCell = row.insertCell();

  // Add student name and grade to the cells
  nameCell.innerHTML = 'Student ' + (i + 1);
  ageCell.innerHTML = Math.floor(Math.random() * 100);
  gradeCell.innerHTML = Math.floor(Math.random() * 100) + 'th';
}

document
  .getElementById('add-student-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var grade = document.getElementById('grade').value;

    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = grade;
  });
