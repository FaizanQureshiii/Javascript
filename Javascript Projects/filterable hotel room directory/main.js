// Hotel class to create Hotel objects
class Hotel {
    constructor(Customername, CustomerAge, CustomerNumber, RoomNum) {
        this.Customername = Customername;
        this.CustomerAge = CustomerAge;
        this.CustomerNumber = CustomerNumber;
        this.RoomNum = RoomNum;
    }
}

// Store class for handling localStorage data
class Store {
    // Get data from localStorage
    static getData() {
        let rooms;
        if (localStorage.getItem('rooms') === null) {
            rooms = [];
        } else {
            rooms = JSON.parse(localStorage.getItem('rooms'));
        }
        return rooms;
    }

    // Store data in localStorage
    static storeData(room){
                              const rooms = Store.getData();
        rooms.push(room); // Add new room
        localStorage.setItem('rooms',JSON.stringify(rooms));
                           }

    // Delete a room based on RoomNum
    static removeData(RoomNum) {
        const rooms = Store.getData(); // Fetch current rooms
        const updatedRooms = rooms.filter(room => room.RoomNum !== RoomNum); // Filter out the room
        localStorage.setItem('rooms', JSON.stringify(updatedRooms)); // Update localStorage
    }
}

class UI {
    // Display hardcoded or locally stored data
    static DisplayRooms() {
        const rooms = Store.getData(); // Get stored rooms
        rooms.forEach(room => UI.addRoomToList(room)); // Add each room to the list
    }

    // Add room to the list in the UI
    static addRoomToList(room) {
        const list = document.querySelector('#Room-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${room.Customername}</td>
            <td>${room.CustomerAge}</td>
            <td>${room.CustomerNumber}</td>
            <td>${room.RoomNum}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }

                                 
 
    // Check if form fields are filled
    static checkFields() {
        const Customername = document.querySelector('#CustomerName').value;
        const CustomerAge = document.querySelector('#CustomerAge').value;
        const CustomerNumber = document.querySelector('#CustomerNumber').value;
        const RoomNum = document.querySelector('#RoomNum').value;
        if (Customername === '' || CustomerAge === '' || CustomerNumber === '' || RoomNum === '') {
            alert('Please fill all the fields');
            return true;
        }
        return false;
    }                                                                          

    // Clear form fields after submission
    static clearFields() {
        document.querySelector('#CustomerName').value = '';
        document.querySelector('#CustomerAge').value = '';
        document.querySelector('#CustomerNumber').value = '';
        document.querySelector('#RoomNum').value = '';
    }

    // Delete room from UI
    static deleteTarget(el) {
        if (el.classList.contains('delete')) {
            if (confirm('Are you sure?')) {
                el.parentElement.parentElement.remove();
            }
        }
    }
}

// Add event listener for form submission
document.getElementById('Room-Form').addEventListener('submit', (e) => {
    e.preventDefault();

    if (UI.checkFields()) {
        return;
    }

    // Get form values from the UI
    const Customername = document.querySelector('#CustomerName').value;
    const CustomerAge = document.querySelector('#CustomerAge').value;
    const CustomerNumber = document.querySelector('#CustomerNumber').value;
    const RoomNum = document.querySelector('#RoomNum').value;

    // Create a new Hotel object
    const room = new Hotel(Customername, CustomerAge, CustomerNumber, RoomNum);
    // Add room to UI
    UI.addRoomToList(room);

    // Store room in localStorage
    Store.storeData(room);

    // Clear form fields
    UI.clearFields();
});

// Display rooms on page load
document.addEventListener('DOMContentLoaded', UI.DisplayRooms);

// Event listener for removing rooms
document.querySelector('#Room-list').addEventListener('click', (e) => {
    // Delete from UI
    UI.deleteTarget(e.target);

    // Delete from localStorage
    const roomNum = e.target.parentElement.previousElementSibling.textContent;
    Store.removeData(roomNum);
});

// Define the input for filtering
const filteritem = document.querySelector('#filterInput');
// Add event listener for filtering
filteritem.addEventListener('keyup', filterItems);
// Function to filter items (rooms)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function filterItems(e) {
    const text = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#Room-list tr');
    rows.forEach(function(row) {
        const roomName = row.querySelector('td:first-child').textContent.toLowerCase();
        if (roomName.indexOf(text) != -1) {
            row.style.display = 'table-row'; // Show the row
        } else {
            row.style.display = 'none'; // Hide the row
        }
    });
}
















