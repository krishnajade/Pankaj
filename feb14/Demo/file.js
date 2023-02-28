function displayPersonDetails() {
var cityList = document.getElementById("cityList");
var selectedCityIndex = cityList.options[cityList.selectedIndex].value;
var personDetailsTable = document.getElementById("personDetailsTable");
var personDetailsTableBody = personDetailsTable.getElementsByTagName("tbody")[0];

if (selectedCityIndex == 0) {
personDetailsTableBody.innerHTML = "";
personDetailsTable.getElementsByTagName("thead")[0].setAttribute("disabled", "");
return;
}

personDetailsTable.getElementsByTagName("thead")[0].removeAttribute("disabled");
personDetailsTableBody.innerHTML = "<tr><td>Loading...</td><td>Loading...</td><td>Loading...</td></tr>";

// simulate a server-side call to retrieve the person details
setTimeout(function() {
var personDetails = getPersonDetails(selectedCityIndex);

var tableRowsHtml = "";
personDetails.forEach(function(person) {
    tableRowsHtml += "<tr><td>" + person.name + "</td><td>" + person.contact + "</td><td>" + person.city + "</td></tr>";
});

personDetailsTableBody.innerHTML = tableRowsHtml;
}, 1000);
}

function getPersonDetails(cityIndex) {
var personDetails = {
1: [
    {name: "Pankaj Gawali.", contact: "9532512324", city: "Ambad"},
    {name: "Dev Suryawanshi.", contact: "7235556678", city: "Satpur"}
],
2: [
    {name: "Anuj Sasale.", contact: "9855593012", city: "Dombivali"},
],
3: [
    {name: "Tushar Arote.", contact: "8155578290", city: "Viman Nager"},
    {name: " Viarat Rajori.", contact: "5552345", city: "Kharadi"}
],
4: [
    {name: "Krishna Jade.", contact: "8255543321", city: "Sonaya Park"}
]
};

return personDetails[cityIndex];
}
