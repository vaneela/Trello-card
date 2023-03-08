const sendDataToServer = async (name, description, startDate, dueDate) => {
  const payload = {
    name: name,
    description: description,
    startDate: startDate,
    dueDate: dueDate,
    idList: "6405e8abd8dc4ed8fcf94c30",
    key: "21a9005e9af34f79d3947b8f1c8b76fa",
    token: "ATTA65db5c1c126882b189d748ec3456cab73e1fba9a1d62d3cb4b5d7fd68909b6beDF845F94",
  };

	const response = await fetch("http://localhost:5555/", {
		method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
		body: JSON.stringify(payload)
	});
	alert("Card created successfully!");
};

const button = document.getElementById("button");

button.addEventListener("click", (e) => {
	e.preventDefault();
	const name = document.getElementById("name").value;
	const description = document.getElementById("description").value;
	const startDate = document.getElementById("startDate").value;
	const dueDate = document.getElementById("dueDate").value;
  if(name && description && startDate && dueDate){

    sendDataToServer(name, description, startDate, dueDate);
    alert("Card created successfully.")
  
}
else
alert("Please fill in the form correctly.");
var frm = document.getElementsByName('form1')[0];
frm.submit(); // Submit the form
frm.reset();  // Reset all form data
  
});
