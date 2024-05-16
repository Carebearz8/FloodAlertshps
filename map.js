var map = L.map('map').setView([10.5697,-61.1432], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([10.5697,-61.1432]).addTo(map)
		.bindPopup('Cher Cher Amazing downloads and uploads <br> Technology Sandbox')
		.openPopup();	

        var marker = L.marker([10.4697,-61.1432]).addTo(map)
		.bindPopup('Cher Cher Amazing <br> Technology Sandbox')
		.openPopup();