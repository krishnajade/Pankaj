var cityData = {
    "pune": [
        {"personName": "Pankaj Gawali", "contact": "9234567890", "location": "Koregaon Park"},
        {"personName": "Tushar Arote", "contact": "987654321", "location": "Hadapsar"}
    ],
    "nashik": [
        {"personName": "Krishna Jade", "contact": "9876543210", "location": "College Road"},
    ],
    "mumbai": [
        {"personName": "Ajinkya Suryawanshi", "contact": "5678901234", "location": "Bandra"},
        {"personName": "Rahul Shimpi", "contact": "4567890123", "location": "Andheri"},
        {"personName": "Mohij Mansuri", "contact": "8123456789", "location": "Dombivali"}

    ]
};

function displayCityData() {
    var city = document.getElementById("city").value;
    var data = cityData[city];
    var table = "<table><tr><td>Name</td><td>Contact</td><td>Location</td></tr>";
    for (var i = 0; i < data.length; i++) {
        table += "<tr><td>" + data[i].personName + "</td><td>" + data[i].contact + "</td><td>" + data[i].location + "</td></tr>";
    }
    table += "</table>";
    document.getElementById("cityData").innerHTML = table;
}