class Employee {
    constructor(firstName: string, lastName: string, employeeId: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = employeeId;
    }
	
	firstName: string;
	lastName: string;
	employeeId: string;
	
	FriendlyName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
	const employees = [
		new Employee("John", "Doe", "1"),
		new Employee("Jane", "Smith", "2"),
		new Employee("Bob", "Johnson", "3")
	];
		
	function generateEmployeeTable() {
		const table = document.createElement("table");
		const headerRow = table.insertRow(0);

		const headers = ["Employee ID", "First Name", "Last Name", "Friendly Name"];
		headers.forEach(headerText => {
			const th = document.createElement("th");
			th.textContent = headerText;
			headerRow.appendChild(th);
		});

		employees.forEach(employee => {
			const row = table.insertRow();
			const cell1 = row.insertCell(0);
			const cell2 = row.insertCell(1);
			const cell3 = row.insertCell(2);
			const cell4 = row.insertCell(3);

			cell1.textContent = employee.employeeId;
			cell2.textContent = employee.firstName;
			cell3.textContent = employee.lastName;
			cell4.textContent = employee.FriendlyName();
		});

		document.body.appendChild(table);
	}

	generateEmployeeTable();
})