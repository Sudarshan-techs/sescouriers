document.getElementById("courierForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const date = document.getElementById("date").value;
  const sender = document.getElementById("sender").value;
  const receiver = document.getElementById("receiver").value;
  const itemDescription = document.getElementById("itemDescription").value;
  const courierPartner = document.getElementById("courierPartner").value;
  const trackingNo = document.getElementById("trackingNo").value;
  const handoverBy = document.getElementById("handoverBy").value;
  const remarks = document.getElementById("remarks").value;

  // Add a new row to the table
  const tableBody = document.getElementById("entriesTable").querySelector("tbody");
  const newRow = tableBody.insertRow();

  newRow.innerHTML = `
    <td>${date}</td>
    <td>${sender}</td>
    <td>${receiver}</td>
    <td>${itemDescription}</td>
    <td>${courierPartner}</td>
    <td>${trackingNo}</td>
    <td>${handoverBy}</td>
    <td>${remarks}</td>
    <td>
      <button onclick="editRow(this)">Edit</button>
      <button onclick="deleteRow(this)">Delete</button>
    </td>
  `;

  // Reset the form
  this.reset();
});

// Function to delete a row
function deleteRow(button) {
  button.parentElement.parentElement.remove();
}

// Function to edit a row
function editRow(button) {
  const row = button.parentElement.parentElement;
  const cells = row.querySelectorAll("td");

  document.getElementById("date").value = cells[0].textContent;
  document.getElementById("sender").value = cells[1].textContent;
  document.getElementById("receiver").value = cells[2].textContent;
  document.getElementById("itemDescription").value = cells[3].textContent;
  document.getElementById("courierPartner").value = cells[4].textContent;
  document.getElementById("trackingNo").value = cells[5].textContent;
  document.getElementById("handoverBy").value = cells[6].textContent;
  document.getElementById("remarks").value = cells[7].textContent;

  // Remove the row being edited
  row.remove();
}
