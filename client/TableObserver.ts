import { Observer } from "./observer.js"

export class TableObserver extends Observer {
    tableId: string;

    constructor(_tableId: string) {
        super();

        this.tableId = _tableId;
    }

    receiveNotification(): void {
		if (Observer.allData.length >= 9) {
			document.querySelector(this.tableId + " tbody")!.innerHTML = "";

			var dataHTML = "";

			for (var i = 0; i < 9; i++) {
				dataHTML += "<tr>";
				dataHTML += "<td>" + i + "</td>";
				dataHTML += "<td>" + Observer.allData[i].value + "</td>";
				dataHTML += "<td>" + Observer.allData[i].sensorId + "</td>";
				dataHTML += "<td>" + Observer.allData[i].time + "</td></tr>";
			}

			document.querySelector("#dataTable tbody")!.innerHTML = dataHTML;
		}
    }
}