class Car {
    constructor(make, model, year, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }
}

    let car;

window.onload = function() {
    let btnLoad = document.getElementById('btn-populate-table');
    Preload();
    btnLoad.addEventListener('click', AddCars);
    // AddCars();

}

function Preload() {
    let c1 = new Car("Hyundai", "Sonata", "2011", 100000);
    let c2 = new Car("Honda", "Civic", "2021", 100);
    let c3 = new Car("Buick", "Encore", "2015", 90000);
    car = [c1, c2, c3];
}

function AddCars() {
    var tbodyRef = document.getElementById('example-table').getElementsByTagName('tbody')[0];

    car.forEach(element => {
        
        // Insert a row at the end of table
        var newRow = tbodyRef.insertRow();
        
        // Insert a cell at the end of the row
        var newCell = newRow.insertCell();
        // Append a text node to the cell
        var newText = document.createTextNode(element.make);
        newCell.appendChild(newText);
    
            // Insert a cell at the end of the row
            var newCell = newRow.insertCell();
            // Append a text node to the cell
            var newText = document.createTextNode(element.model);
            newCell.appendChild(newText);
    
                // Insert a cell at the end of the row
        var newCell = newRow.insertCell();
        // Append a text node to the cell
        var newText = document.createTextNode(element.year);
        newCell.appendChild(newText);
    
            // Insert a cell at the end of the row
            var newCell = newRow.insertCell();
            // Append a text node to the cell
            var newText = document.createTextNode(element.mileage);
            newCell.appendChild(newText);
        });
}

