document.addEventListener('DOMContentLoaded', () => {
    fetch('xmlSample.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'application/xml');
            displayData(xmlDoc);
        })
        .catch(error => console.error('Error fetching XML:', error));
});

function displayData(xmlDoc) {
    const spatialUnits = xmlDoc.querySelectorAll('spatialUnit[n="0"]');
    const tableBody = document.getElementById('data-table');

    spatialUnits.forEach(spatialUnit => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = spatialUnit.querySelector('identification > label').textContent;
        row.appendChild(nameCell);

        const parishCell = document.createElement('td');
        const parishProperty = Array.from(spatialUnit.querySelectorAll('property')).find(property => 
            property.querySelector('label').textContent === 'Belongs to parish ...');
        parishCell.textContent = parishProperty ? parishProperty.querySelector('value').textContent : 'N/A';
        row.appendChild(parishCell);

        tableBody.appendChild(row);
    });
}
